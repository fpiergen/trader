'use strict';

const myTrader = require('./myAlgotrader')({});

module.exports.macdHandler = async (event, context, callback) => {
    console.log(JSON.stringify(event, null, '\t'));

    let result;
    result = await myTrader.getMacd(event.queryStringParameters.symbol, event.queryStringParameters.interval, event.queryStringParameters.timePeriod, event.queryStringParameters.priceType, event.queryStringParameters.fastPeriod, event.queryStringParameters.slowPeriod, event.queryStringParameters.signalPeriod, event.queryStringParameters.todayOnly);

    const response = {
        statusCode: 200,
        body: result,
    };

    return response;
    //callback(null, response);

    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
