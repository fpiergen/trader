'use strict';

const myTrader = require('./myAlgotrader')({});

module.exports.rsiHandler = async (event, context, callback) => {
    console.log(JSON.stringify(event, null, '\t'));

    let result;
    result = await myTrader.getRsi(event.queryStringParameters.symbol, event.queryStringParameters.interval, event.queryStringParameters.timePeriod, event.queryStringParameters.priceType, event.queryStringParameters.todayOnly);

    const response = {
        statusCode: 200,
        body: result,
    };

    return response;
};
