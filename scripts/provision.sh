#!/usr/bin/env bash

# get branch name to deploy from .env
GIT_BRANCH=$(grep GIT_BRANCH .env | cut -d '=' -f 2-)
# clone branch to deploy from github
git clone -b $GIT_BRANCH git@github.com:mutaimwiti/mmdp_website_draft.git new_mmdp_website_draft
# move .env to cloned repo
mv .env new_mmdp_website_draft/.env
# install project dependencies
yarn --cwd new_mmdp_website_draft
# build a production version
yarn --cwd new_mmdp_website_draft build
# stop all pm2 processes
pm2 stop all
# remove old version
rm -rf mmdp_website_draft
# make new version current version
mv new_mmdp_website_draft mmdp_website_draft
# start app with pm2
pm2 serve --spa mmdp_website_draft/build
# delete this script - hopefully it has completed its job :)
rm $0
