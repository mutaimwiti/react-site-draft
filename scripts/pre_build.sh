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
