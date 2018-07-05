const algotrader = require('algotrader');
const  moment = require('moment');


module.exports = (spec) => {

    const ALPHA_VANTAGE_API_KEY = "7OL3MEMA5A775A1O";
    const NEWS_API_KEY = "ed60c39c5ece4568ad221f3e03cb660b";

    let {
        username,
        password
    } = spec;

    const timeZone = 'America/New_York';
    const IEX = algotrader.Data.IEX;
    const Query = algotrader.Data.Query;
    const Stream = algotrader.Data.Stream;

    const AlphaVantage = algotrader.Data.AlphaVantage;
    const av = new AlphaVantage(ALPHA_VANTAGE_API_KEY);


    return {

        async other(input) {
            let result = IEX[input.function](input.arguments);
            return result;
        },

        async getAllNews(filterOn) {

            const robinhood = algotrader.Robinhood;
            const User = robinhood.User;
            const myUser = new User(username, password);
            const News = algotrader.Data.News;

            let theNews = await News.getAll(NEWS_API_KEY, {
                q: filterOn,
                language: "en",
                sortBy: "publishedAt" 
            });

            let contentArray =[] 
            theNews.forEach( bean => {
                let content = {};
                content.title = bean.getTitle();
                content.description = bean.getDescription();
                content.URL = bean.getURL();
                content.date =  bean.getDate();
                contentArray.push(content);
            });

            return contentArray;
        },

 
        async getHeadlines(country, category) {

            const robinhood = algotrader.Robinhood;
            const User = robinhood.User;
            const myUser = new User(username, password);
            const News = algotrader.Data.News;

            if (category === 'all' )
                category = null;

            let theNews = await News.getHeadlines(NEWS_API_KEY, {
                country: country,
                category: category
            });

            let contentArray =[] 
            theNews.forEach( bean => {
                let content = {};
                content.title = bean.getTitle();
                content.description = bean.getDescription();
                content.URL = bean.getURL();
                contentArray.push(content);
            });
            /*
            for ( let bean of theNews ) {
                let article = await bean.getArticle();
                  htmlContent.push(article);
                  break;
            }
            */

            return contentArray;
        },

        async getPriceTest(symbol, interval, todayOnly) {
            var trace1 = {

                x: ['2017-01-04', '2017-01-05', '2017-01-06', '2017-01-09', '2017-01-10', '2017-01-11', '2017-01-12', '2017-01-13', '2017-01-17', '2017-01-18', '2017-01-19', '2017-01-20', '2017-01-23', '2017-01-24', '2017-01-25', '2017-01-26', '2017-01-27', '2017-01-30', '2017-01-31', '2017-02-01', '2017-02-02', '2017-02-03', '2017-02-06', '2017-02-07', '2017-02-08', '2017-02-09', '2017-02-10', '2017-02-13', '2017-02-14', '2017-02-15'],

                close: [116.019997, 116.610001, 117.910004, 118.989998, 119.110001, 119.75, 119.25, 119.040001, 120, 119.989998, 119.779999, 120, 120.080002, 119.970001, 121.879997, 121.940002, 121.949997, 121.629997, 121.349998, 128.75, 128.529999, 129.080002, 130.289993, 131.529999, 132.039993, 132.419998, 132.119995, 133.289993, 135.020004, 135.509995],

                decreasing: {
                    line: {
                        color: '#7F7F7F'
                    }
                },

                high: [116.510002, 116.860001, 118.160004, 119.43, 119.379997, 119.93, 119.300003, 119.620003, 120.239998, 120.5, 120.089996, 120.449997, 120.809998, 120.099998, 122.099998, 122.440002, 122.349998, 121.629997, 121.389999, 130.490005, 129.389999, 129.190002, 130.5, 132.089996, 132.220001, 132.449997, 132.940002, 133.820007, 135.089996, 136.270004],

                increasing: {
                    line: {
                        color: '#17BECF'
                    }
                },

                line: {
                    color: 'rgba(31,119,180,1)'
                },

                low: [115.75, 115.809998, 116.470001, 117.940002, 118.300003, 118.599998, 118.209999, 118.809998, 118.220001, 119.709999, 119.370003, 119.730003, 119.769997, 119.5, 120.279999, 121.599998, 121.599998, 120.660004, 120.620003, 127.010002, 127.779999, 128.160004, 128.899994, 130.449997, 131.220001, 131.119995, 132.050003, 132.75, 133.25, 134.619995],

                open: [115.849998, 115.919998, 116.779999, 117.949997, 118.769997, 118.739998, 118.900002, 119.110001, 118.339996, 120, 119.400002, 120.449997, 120, 119.550003, 120.419998, 121.669998, 122.139999, 120.93, 121.150002, 127.029999, 127.980003, 128.309998, 129.130005, 130.539993, 131.350006, 131.649994, 132.460007, 133.080002, 133.470001, 135.520004],

                type: 'candlestick',
                xaxis: 'x',
                yaxis: 'y'
            };

            var data = [trace1];

            var layout = {
                dragmode: 'zoom',
                margin: {
                    r: 10,
                    t: 25,
                    b: 40,
                    l: 60
                },
                showlegend: false,
                xaxis: {
                    autorange: true,
                    domain: [0, 1],
                    range: ['2017-01-03 12:00', '2017-02-15 12:00'],
                    rangeslider: {
                        range: ['2017-01-03 12:00', '2017-02-15 12:00']
                    },
                    title: 'Date',
                    type: 'date'
                },
                yaxis: {
                    autorange: true,
                    domain: [0, 1],
                    range: [114.609999778, 137.410004222],
                    type: 'linear'
                }
            };

            return [data, layout];

        },

        async getPrice(symbol, interval, todayOnly) {

            let justToday = (todayOnly === 'true');

            let openA = [];
            let highA = [];
            let lowA = [];
            let closeA = [];
            let volA = [];
            let xaxisA = [];

            let vol = {
                x: xaxisA,
                y: volA,
                type: 'bar',
                name: 'Volume'
            };

            let array = await av.timeSeriesIntraday(symbol, interval);
            let maxNumOfTries = 10;
            while (array.length === 0 && maxNumOfTries !== 0) {
                console.log("trying... " + maxNumOfTries);
                await sleep(1000);
                array = await av.timeSeriesIntraday(symbol, interval);
                maxNumOfTries--;
            }

            let truncatedArray = truncateArray(justToday, array);

            truncatedArray.forEach(price => {
                openA.push(price.price.open);
                highA.push(price.price.high);
                lowA.push(price.price.low);
                closeA.push(price.price.close);
                volA.push(price.price.volume);
                xaxisA.push(toTimeZone(price.date, timeZone));
            });

            var trace1 = {
                x: xaxisA,
                close: closeA,
                decreasing: {
                    line: {
                        color: '#7F7F7F'
                    }
                },
                high: highA,
                increasing: {
                    line: {
                        color: '#17BECF'
                    }
                },
                line: {
                    color: 'rgba(31,119,180,1)'
                },
                low: lowA,
                open: openA,
                type: 'candlestick',
                xaxis: 'x',
                yaxis: 'y'
            };

            var data = [trace1];

            var layout = {
                dragmode: 'zoom',
                margin: {
                    r: 10,
                    t: 25,
                    b: 40,
                    l: 60
                },
                showlegend: false,
                xaxis: {
                    autorange: true,
                    domain: [0, 1],
                    //range: [xaxisA[xaxisA.length - 1], xaxisA[0]],
                    //rangeslider: {
                    //    range: [xaxisA[xaxisA.length - 1], xaxisA[0]]
                    //},
                    title: 'Date',
                    type: 'date'
                },
                yaxis: {
                    autorange: true,
                    domain: [0, 1],
                    //range: [10.0, 30.0],
                    type: 'linear'
                }
            };

            return [data, layout, vol];

        },


        async getPriceOld(symbol, interval, todayOnly) {

            let justToday = (todayOnly === 'true');

            let openA = [];
            let highA = [];
            let lowA = [];
            let closeA = [];
            let volA = [];
            let xaxis = [];

            let open = {
                x: xaxis,
                y: openA,
                type: 'scatter',
                name: 'Open'
            };
            let high = {
                x: xaxis,
                y: highA,
                type: 'scatter',
                name: 'High'
            };
            let low = {
                x: xaxis,
                y: lowA,
                type: 'scatter',
                name: 'Low'
            };
            let close= {
                x: xaxis,
                y: closeA,
                type: 'scatter',
                name: 'Close'
            };
            let vol= {
                x: xaxis,
                y: volA,
                type: 'bar',
                name: 'Volume'
            };

            let array = await av.timeSeriesIntraday(symbol, interval);
                let maxNumOfTries = 10;
                while (array.length === 0 && maxNumOfTries !== 0) {
                    console.log("trying... " + maxNumOfTries);
                    await sleep(1000);
                    array = await av.timeSeriesIntraday(symbol, interval);
                    maxNumOfTries--;
                }

                let truncatedArray = truncateArray(justToday, array);

            truncatedArray.forEach(price => {
                openA.push(price.price.open);
                highA.push(price.price.high);
                lowA.push(price.price.low);
                closeA.push(price.price.close);
                volA.push(price.price.volume);
                xaxis.push(toTimeZone(price.date, timeZone));
            });


            return [open, high, low, close, vol];

        },

 

        async getRsi(symbol, interval, timePeriod, seriesType, todayOnly) {

            let justToday = (todayOnly === 'true');

            let rsiA = [];
            let xaxis = [];

            let rsi = {
                x: xaxis,
                y: rsiA,
                type: 'scatter',
                name: 'RSI'
            };



            let array = await av.rsi(symbol, interval, timePeriod, seriesType);
                let maxNumOfTries = 10;
                while (array.length === 0 && maxNumOfTries !== 0) {
                    console.log("trying... " + maxNumOfTries);
                    await sleep(1000);
                    array = await av.rsi(symbol, interval, timePeriod, seriesType);
                    maxNumOfTries--;
                }

                let truncatedArray = truncateArray(justToday, array);

            truncatedArray.forEach(rsi => {
                rsiA.push(rsi.RSI);
                xaxis.push(toTimeZone(rsi.date, timeZone));
            });


            return [rsi];

        },

            //macd(symbol, interval, timePeriod, seriesType, fastPeriod, slowPeriod, signalPeriod) 
        async getMacd(symbol, interval, timePeriod, seriesType, fastPeriod, slowPeriod, signalPeriod, todayOnly) {

                let justToday = (todayOnly === 'true');

                let macdA = [];
                let signalA = [];
                let histA = [];
                let xaxis = [];

                let mmacd = {
                    x: xaxis,
                    y: macdA,
                    type: 'scatter',
                    name: 'MCAD'
                };

                let signal = {
                    x: xaxis,
                    y: signalA,
                    name: 'SIGNAL',
                    type: 'scatter'
                };

                let hist = {
                    x: xaxis,
                    y: histA,
                    name: 'Hist',
                    type: 'bar'
                };



                // from node_modules objects/data/AlphaVantage.js
                // macd(symbol, interval, timePeriod, seriesType, fastPeriod, slowPeriod, signalPeriod) {
                let array = await av.macd(symbol, interval, timePeriod, seriesType);
                let maxNumOfTries = 10;
                while (array.length === 0 && maxNumOfTries !== 0) {
                    console.log("trying... " + maxNumOfTries);
                    await sleep(1000);
                    array = await av.macd(symbol, interval, timePeriod, seriesType);

                    maxNumOfTries--;
                }

                let truncatedArray = truncateArray(justToday, array);
                    truncatedArray.forEach(macd => {
                        macdA.push(macd.MACD);
                        signalA.push(macd.MACD_Signal);
                        histA.push(macd.MACD_Hist);
                        xaxis.push(toTimeZone(macd.date, timeZone));
                        //xaxis.push(macd.date);
                    });
 
                    /*
                let BreakException = {};
                let today = new Date();
                array.reverse();
                try {
                    array.forEach(macd => {
                        let givenDate = new Date(macd.date);
                        if (justToday) {
                            if (!(today.getDay() === givenDate.getDay()))
                                throw BreakException;
                        }
                        macdA.push(macd.MACD);
                        signalA.push(macd.MACD_Signal);
                        histA.push(macd.MACD_Hist);
                        xaxis.push(toTimeZone(macd.date, timeZone));
                        //xaxis.push(macd.date);
                    });
                } catch (e) {
                    if (e !== BreakException) throw e;
                }

                */
                return [mmacd, signal, hist];

            },



            streamIt(symbols) {
                const myStream = new Stream(symbols);
                myStream.start();

                myStream
                    .on('quote', quote => {
                        console.log(JSON.stringify(quote, null, '\t'));
                    })
                    .on('response', res => {
                        console.log('************************');
                        console.log(JSON.stringify(res, null, '\t'));
                    })
                    .on('error', error => {

                        console.log('************************');
                        console.log(JSON.stringify(error, null, '\t'));
                    });
            },

            quote(symbol) {
                IEX.getQuote(symbol).then(quote => {
                    console.log(JSON.stringify(quote, null, '\t'));
                });

            },

            gainers(number, top) {
                if (top)
                    Query.getTopGainers(number).then(array => {
                        array.forEach(mydata => {
                            console.log(JSON.stringify(mydata, null, '\t'));
                        });
                    });
                else
                    Query.getTopLosers(number).then(array => {
                        array.forEach(mydata => {
                            console.log(JSON.stringify(mydata, null, '\t'));
                        });
                    });

            },

            search(company) {
                Query.search(company).then(array => {
                    console.log(JSON.stringify(array, null, '\t'));
                });
            }

        }
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function toTimeZone(time, zone) {
    //2018-06-20T18:20:00.000Z
    var format = 'YYYY-MM-DDTHH:mm:ssZ';
            return moment(time, format).tz(zone).format(format);
}

function truncateArray(todayOnly, array) {

    if ( !todayOnly )
        return array;

    let BreakException = {};
    let today = new Date();
    let truncatedArray=[];

    array.reverse();
    try {
        array.forEach(bean => {
            let givenDate = new Date(bean.date);
            if (!(today.getDay() === givenDate.getDay()))
                throw BreakException;
            truncatedArray.push(bean);
        });
    } catch (e) {
        if (e !== BreakException) throw e;
    }
    return truncatedArray;
}

 async function getArticle( news ) {
     return await news.getArticle();
 }
