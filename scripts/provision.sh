#!/usr/bin/env bash

pm2 stop all
rm -rf mmdp_website_draft
source .env
git clone -b $GIT_BRANCH git@github.com:mutaimwiti/mmdp_website_draft.git
cp .env mmdp_website_draft/.env
yarn --cwd mmdp_website_draft
yarn --cwd mmdp_website_draft build
pm2 serve --spa mmdp_website_draft/build
