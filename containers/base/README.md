# dogu base docker image

## how to build

    docker build -t official/base:<alpine linux version>-<cloudogu revision> .

example

    docker build -t official/base:3.5-2 .


NOTE: _alpine linux version_ see FROM statement in Dockerfile

NOTE: _alpine linux version_ and _cloudogu revision_ should be mentioned on the first line in Dockerfile


## additional packages for base not included in alpine repository

### doguctl

origin is https://github.com/cloudogu/doguctl/releases/download/v0.2.2/doguctl-0.2.2.tar.gz
cached in packages directory to avoid download
