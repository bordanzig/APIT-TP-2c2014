#!/bin/bash

mongod --fork --logpath ./log.txt

git pull
cd poc-app
npm install
nodejs index.js
