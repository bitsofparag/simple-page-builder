#!/usr/bin/env bash

# Development server configuration
serverMonitor=./node_modules/.bin/pm2
serverFile=dev-server.js

if [ -z "$1" ] ; then #if no params passed
    if $serverMonitor stop $serverFile ; then
        echo ">>>>>>>> Restarting development server"
        $serverMonitor start $serverFile
    else
        echo "!!!!!!!! Development server was not running. Nothing was stopped"
        $serverMonitor start $serverFile
    fi
else
    echo ">>>>>>>>> $1ing development server"
    $serverMonitor $1 $serverFile
fi
