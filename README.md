# MyTrader
### This is not deployed to AWS. All offline implementation with serverless.
### create gui/src/environments/environment.ts and populate with AWS stuff 

```
export const environment = {

    production: false,

    api: {
        macd: "macd",
        rsi: "rsi",
        headlineNews: "headlineNews",
        allNews: "allNews",
        price: "price",
        other: "other"
    },
    amplify: {

        // Got to give it something to work on serverless offline
        Auth: {
            identityPoolId: 'xxxxx',
            region: 'us-east-1',
            userPoolId: 'xxxx',
            userPoolWebClientId: 'xxxx'
        },
        API: {
            endpoints: [
                {  
                    name: "macd",
                    endpoint: "http://localhost:3001/macd"
                },
                {  
                    name: "rsi",
                    endpoint: "http://localhost:3001/rsi"
                },
                },
                {
                    name: "headlineNews",
                    endpoint: "http://localhost:3001/hlnews"
                },
                {
                    name: "allNews",
                    endpoint: "http://localhost:3001/allnews"
                },
                {
                    name: "price",
                    endpoint: "http://localhost:3001/price"
                },
                {
                    name: "other",
                    endpoint: "http://localhost:3001/other"
                }
            ]
        }
    }

};

```
### Start things
```
cd server
sls offline start --port 3001
cd gui
npm start

```
