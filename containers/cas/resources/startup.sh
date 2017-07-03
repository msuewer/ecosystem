#!/bin/bash
set -o errexit
set -o nounset
set -o pipefail

# return config value or default value
# param1 config key
# param2 default value
function cfg_or_default {
  if ! VALUE=$(doguctl config "${1}"); then
    VALUE="${2}"
  fi
  echo "${VALUE}"
}

# general variables for templates
DOMAIN=$(doguctl config --global domain)
FQDN=$(doguctl config --global fqdn)

# ldap settings for template
LDAP_TYPE=$(doguctl config ldap/ds_type)
LDAP_SERVER=$(doguctl config ldap/server)
LDAP_HOST=$(doguctl config ldap/host)
LDAP_PORT=$(doguctl config ldap/port)
LDAP_ATTRIBUTE_USERNAME=$(doguctl config ldap/attribute_id)
# TODO: use fullname ??
LDAP_ATTRIBUTE_FULLNAME=$(doguctl config ldap/attribute_fullname)
LDAP_ATTRIBUTE_MAIL=$(doguctl config ldap/attribute_mail)
LDAP_ATTRIBUTE_GROUP=$(doguctl config ldap/attribute_group)
LDAP_STARTTLS='false'

LDAP_GROUP_BASE_DN=$(cfg_or_default 'ldap/group_base_dn' '')
LDAP_GROUP_SEARCH_FILTER=$(cfg_or_default 'ldap/group_search_filter' '' | sed 's@&@\\\&@g')
LDAP_GROUP_ATTRIBUTE_NAME=$(cfg_or_default 'ldap/group_attribute_name' '')

LDAP_USE_USER_CONNECTION=$(cfg_or_default 'ldap/use_user_connection_to_fetch_attributes' 'true')

# replace & with /& because of sed
LDAP_SEARCH_FILTER=$(echo "(&$(doguctl config ldap/search_filter)($LDAP_ATTRIBUTE_USERNAME={user}))" | sed 's@&@\\\&@g')

if [[ "$LDAP_TYPE" == 'external' ]]; then
  LDAP_BASE_DN=$(doguctl config ldap/base_dn)
  LDAP_BIND_DN=$(doguctl config ldap/connection_dn)
  LDAP_BIND_PASSWORD=$(doguctl config -e ldap/password | sed 's@/@\\\\/@g')
else
  # for embedded ldap
  LDAP_BASE_DN="ou=People,o=${DOMAIN},dc=cloudogu,dc=com"
  LDAP_BIND_DN=$(doguctl config -e sa-ldap/username)
  LDAP_BIND_PASSWORD=$(doguctl config -e sa-ldap/password | sed 's@/@\\\\/@g')
fi

STAGE=$(cfg_or_default '--global stage' '')
if [[ "$STAGE" != 'development' ]]; then
  STAGE='production'
fi
REQUIRE_SECURE='true'
if [[ "$STAGE" == 'development' ]]; then
  REQUIRE_SECURE='false'
fi

# render templates
sed "s@%DOMAIN%@$DOMAIN@g;\
s@%LDAP_STARTTLS%@$LDAP_STARTTLS@g;\
s@%FQDN%@$FQDN@g;\
s@%STAGE%@$STAGE@g;\
s@%REQUIRE_SECURE%@$REQUIRE_SECURE@g;\
s@%LDAP_HOST%@$LDAP_HOST@g;\
s@%LDAP_PORT%@$LDAP_PORT@g;\
s@%LDAP_SEARCH_FILTER%@$LDAP_SEARCH_FILTER@g;\
s@%LDAP_BASE_DN%@$LDAP_BASE_DN@g;\
s?%LDAP_BIND_DN%?$LDAP_BIND_DN?g;\
s@%LDAP_BIND_PASSWORD%@$LDAP_BIND_PASSWORD@g;\
s@%LDAP_ATTRIBUTE_USERNAME%@$LDAP_ATTRIBUTE_USERNAME@g;\
s?%LDAP_ATTRIBUTE_MAIL%?$LDAP_ATTRIBUTE_MAIL?g;\
s@%LDAP_ATTRIBUTE_GROUP%@$LDAP_ATTRIBUTE_GROUP@g;\
s@%LDAP_GROUP_BASE_DN%@$LDAP_GROUP_BASE_DN@g;\
s@%LDAP_GROUP_SEARCH_FILTER%@$LDAP_GROUP_SEARCH_FILTER@g;\
s@%LDAP_GROUP_ATTRIBUTE_NAME%@$LDAP_GROUP_ATTRIBUTE_NAME@g;\
s@%LDAP_USE_USER_CONNECTION%@$LDAP_USE_USER_CONNECTION@g"\
 /opt/apache-tomcat/cas.properties.tpl > /opt/apache-tomcat/webapps/cas/WEB-INF/cas.properties

# create truststore, which is used in the setenv.sh
create_truststore.sh > /dev/null

if [[ "$LDAP_TYPE" == 'embedded' ]]; then
  # wait until ldap passed all health checks
  echo "wait unit ldap passes all health checks"
  if ! doguctl healthy --wait --timeout 120 ldap; then
    echo "timeout reached by waiting of ldap to get healthy"
    exit 1
  fi
fi

# startup tomcat
exec su - cas -c "${CATALINA_SH} run"
