# cesi/nginx
FROM registry.cloudogu.com/official/base:3.5-2
MAINTAINER Sebastian Sdorra <sebastian.sdorra@cloudogu.com>

ENV CES_CONFD_VERSION=0.1.4 \
    WARP_MENU_VERSION=0.1.0 \
    CES_THEME_VERSION=bcf04bab10a6bf534a7167a92315cd917de7bcb7

COPY resources resources

RUN apk --update add openssl pcre zlib \
 # add nginx user
 && adduser nginx -D \

 # install ces-confd
 && curl -Lsk https://github.com/cloudogu/ces-confd/releases/download/v${CES_CONFD_VERSION}/ces-confd-v${CES_CONFD_VERSION}.tar.gz | gunzip | tar -x -O > /usr/bin/ces-confd \
 && chmod +x /usr/bin/ces-confd \
 && mkdir -p /var/log/nginx \
 && mkdir -p /var/www/html \

 # install warp menu
 # the two following lines are commented out for test reasons
# && curl -Lsk https://github.com/cloudogu/warp-menu/releases/download/v${WARP_MENU_VERSION}/warp-v${WARP_MENU_VERSION}.zip -o /tmp/warp.zip \
# && unzip /tmp/warp.zip -d /var/www/html \

 # install custom error pages
 && curl -Lsk https://github.com/cloudogu/ces-theme/archive/${CES_THEME_VERSION}.zip -o /tmp/theme.zip \
 && mkdir /var/www/html/errors \
 && unzip /tmp/theme.zip -d /tmp/theme \
 && mv /tmp/theme/ces-theme-*/dist/errors/* /var/www/html/errors \
 && rm -rf /tmp/theme.zip /tmp/theme \

 # install about page
 # next lines are commented out for test reasons and since repository is private and it is not able to download that private repository
 #&& curl -Lsk https://github.com/cloudogu/ces-about/archive/master.zip -o /tmp/about.zip \
 #&& mkdir -p /var/www/html/info \
 #&& unzip /tmp/about.zip -d /var/www/html/info \
 #&& rm -rf /tmp/about.zip \

 # for test reasons (about page repository is private, so sources cannot get from repository; warp menu has to be released before getting it from repository
 && mv resources/* var/www/html \

 # redirect logs
 && ln -sf /dev/stdout /var/log/nginx/access.log \
 && ln -sf /dev/stderr /var/log/nginx/error.log \

 # cleanup apk cache
 && rm -rf /var/cache/apk/*

# copy files
COPY dist/nginx /usr/sbin/nginx
COPY etc/nginx /etc/nginx
COPY etc/ces-confd /etc/ces-confd
COPY startup.sh /startup.sh

# Define mountable directories.
VOLUME ["/etc/nginx/conf.d", "/var/log/nginx", "/var/www/html"]

# Define working directory.
WORKDIR /etc/nginx

# Define default command.
CMD ["/startup.sh"]

# Expose ports.
EXPOSE 80
EXPOSE 443
