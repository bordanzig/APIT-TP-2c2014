FROM ubuntu:14.10
MAINTAINER APIT - 20142c - Grupo6

RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
RUN echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | tee /etc/apt/sources.list.d/10gen.list

RUN apt-get update --fix-missing
RUN apt-get install -y nodejs npm
RUN apt-get install -y git
RUN apt-get install -y mongodb-org
RUN apt-get autoremove; apt-get clean

RUN mkdir -p /data/db
RUN mkdir -p /var/poc

WORKDIR /var/poc
RUN git clone https://github.com/bordanzig/APIT-TP-2c2014.git

WORKDIR /var/poc/APIT-TP-2c2014

EXPOSE 27017
EXPOSE 3000

CMD ["/bin/sh", "run-poc.sh"]

