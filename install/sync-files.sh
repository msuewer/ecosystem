#!/bin/bash
set -o errexit
set -o nounset
set -o pipefail

# sync resources to fs
rsync -rav $INSTALL_HOME/resources/* /

# space for privilege adjustment
chmod u+x /etc/ces/*.sh
chmod o+x /usr/local/bin/ipchange.sh

# Reload systemd daemon to recognize dockeroptions config file
systemctl daemon-reload
