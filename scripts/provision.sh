#!/usr/bin/env bash

# stop all pm2 processes
pm2 stop all
# remove current repo
rm -rf mmdp_website_draft
# get branch name to deploy from .env
GIT_BRANCH=$(grep GIT_BRANCH .env | cut -d '=' -f 2-)
# clone branch to deploy from github
git clone -b $GIT_BRANCH git@github.com:mutaimwiti/mmdp_website_draft.git
# move .env to cloned repo
mv .env mmdp_website_draft/.env
# install project dependencies
yarn --cwd mmdp_website_draft
# build a production version
yarn --cwd mmdp_website_draft build
# start app with pm2
pm2 serve --spa mmdp_website_draft/build
# delete this script - hopefully it has completed its job :)
rm $0
