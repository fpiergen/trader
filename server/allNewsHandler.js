'use strict';

const myTrader = require('./myAlgotrader')({"username": "fpiergen", "password": "theSmallBigo0!"});

module.exports.allNewsHandler = async (event, context, callback) => {

    console.log(JSON.stringify(event, null, '\t'));

    let result;
    result = await myTrader.getAllNews(event.queryStringParameters.filterOn);

    const response = {
        statusCode: 200,
        body: result,
    };

    return response;
};
