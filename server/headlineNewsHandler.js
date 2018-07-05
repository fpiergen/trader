'use strict';

const myTrader = require('./myAlgotrader')({"username": "fpiergen", "password": "theSmallBigo0!"});

module.exports.headlineNewsHandler = async (event, context, callback) => {

    console.log(JSON.stringify(event, null, '\t'));

    let result;
    result = await myTrader.getHeadlines(event.queryStringParameters.country, event.queryStringParameters.newsCategory);

    const response = {
        statusCode: 200,
        body: result,
    };

    return response;
};
