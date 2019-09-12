#!/usr/bin/env bash

if [ "$CIRCLE_BRANCH" == master ]; then
    # set production env variables and server
    SERVER_IP=$PROD_IP
    echo "REACT_APP_SERVER_URL"=$(echo $PROD_REACT_APP_SERVER_URL) >> .env
else
    # set staging env variables and server
    SERVER_IP=$STAG_IP
    echo "REACT_APP_SERVER_URL"=$(echo $STAG_REACT_APP_SERVER_URL) >> .env
fi

echo "GIT_BRANCH"=$(echo $CIRCLE_BRANCH) >> .env

ssh-keyscan $SERVER_IP >> ~/.ssh/known_hosts

# copy provision.sh to server
# provision.sh stops pm2, removes existing work, clones repo, builds app and starts pm2
scp scripts/provision.sh $DEPLOY_USER@$SERVER_IP:/home/$DEPLOY_USER/provision.sh
# copy .env to server
# .env will be used when building and cloning the app
scp .env $DEPLOY_USER@$SERVER_IP:/home/$DEPLOY_USER/.env
# trigger provision.sh
ssh $DEPLOY_USER@$SERVER_IP "chmod +x provision.sh && ./provision.sh"
