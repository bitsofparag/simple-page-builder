if [ -n $NODE_ENV ]; then
    echo "in if"
    if [ "$NODE_ENV" = "production" ]; then
        echo "in if if"
        npm i --only=dev
    fi
fi
