#!/usr/bin/env bash

pm2 stop all
rm -rf mmdp_website_draft
GIT_BRANCH=$(grep GIT_BRANCH .env | cut -d '=' -f 2-) # get branch from .env
git clone -b $GIT_BRANCH git@github.com:mutaimwiti/mmdp_website_draft.git
mv .env mmdp_website_draft/.env
yarn --cwd mmdp_website_draft
yarn --cwd mmdp_website_draft build
pm2 serve --spa mmdp_website_draft/build
rm $0 # delete this script
