FROM alpine:3.5
MAINTAINER Sebastian Sdorra <sebastian.sdorra@cloudogu.com>

ENV DOGUCTL_VERSION 0.2.2

# copy resource
COPY resources/ /

# install doguctl
ADD packages/doguctl-${DOGUCTL_VERSION}.tar.gz /usr/bin/

# install dependencies
RUN apk add --no-cache bash curl openssl wget tar zip unzip ca-certificates jq
