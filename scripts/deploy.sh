#!/usr/bin/env bash

if [ "$CIRCLE_BRANCH" == master ]; then
    # production
    SERVER_IP=$PROD_IP
else
    # staging
    SERVER_IP=$STAG_IP
fi

#scp .env $DEPLOY_USER@$SERVER_IP:/home/$DEPLOY_USER/$DEPLOY_FOLDER/.env
ssh $DEPLOY_USER@$SERVER_IP "./deploy.sh"
