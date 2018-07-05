import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import { environment } from './../../environments/environment';
//import * as Plotly from 'plotly.js';
import { AmplifyService }  from 'aws-amplify-angular';

@Component({
  selector: 'app-my-trader',
  templateUrl: './my-trader.component.html',
  styleUrls: ['./my-trader.component.css']
})
export class MyTraderComponent implements OnInit {


    formMyTrader: FormGroup;
    formMyTraderNews: FormGroup;
    formMyTraderOther: FormGroup;

    private defSymbol: string = 'PVTL';
    private company: string;
    private defInterval: string = '5min';
    private defTimePeriod: number = 12;
    private defPriceType: string = 'open';
    private defTodayOnly: boolean = true;
    private defCountry: string= 'us';
    private defNewsCategory: string = 'all';
    private defStockAPI: string = 'IEX';

    stockAPIOptions = [
	'IEX',
        'AlphaVantage'
    ];

    newsCategoryOptions = [
	'all',
	'business',
	'sports',
	'health',
	'entertainment',
	'science',
	'technology'
    ];


    intervalOptions = [
	'1min',
	'5min',
	'15min',
	'30min',
	'60min',
	'daily',
	'weekly',
	'monthly'
    ];

    priceTypeOptions = [
	'close',
	'open',
	'high',
	'low'
    ];


    constructor(private fb: FormBuilder, public amplifyService: AmplifyService ){}

    ngOnInit() {
	this.formMyTrader = this.fb.group({
	    "todayOnly": this.fb.control(this.defTodayOnly), // Here you can do things like validating input ( See cost comp. in Bigoooo)
	    "symbol": this.fb.control(this.defSymbol), // Here you can do things like validating input ( See cost comp. in Bigoooo)
	    "interval": this.fb.control(this.defInterval), // Here you can do things like validating input ( See cost comp. in Bigoooo)
	    "timePeriod": this.fb.control(this.defTimePeriod), // Here you can do things like validating input ( See cost comp. in Bigoooo)
	    "priceType": this.fb.control(this.defPriceType), // Here you can do things like validating input ( See cost comp. in Bigoooo)
	    "macd": this.fb.group({
		fastPeriod: this.fb.control(''), // Here you can do things like validating input ( See cost comp. in Bigoooo)
		slowPeriod: this.fb.control(''), // Here you can do things like validating input ( See cost comp. in Bigoooo)
		signalPeriod: this.fb.control('') // Here you can do things like validating input ( See cost comp. in Bigoooo)
	    })
	});

        this.formMyTraderNews = this.fb.group({
	    "country": this.fb.control(this.defCountry), // Here you can do things like validating input ( See cost comp. in Bigoooo)
	    "newsCategory": this.fb.control(this.defNewsCategory), // Here you can do things like validating input ( See cost comp. in Bigoooo)
	    "grepFilter": this.fb.control('') // Here you can do things like validating input ( See cost comp. in Bigoooo)
	});

        this.formMyTraderOther = this.fb.group({
	    "function": this.fb.control(''), // Here you can do things like validating input ( See cost comp. in Bigoooo)
	    "arguments": this.fb.control(''), // Here you can do things like validating input ( See cost comp. in Bigoooo)
	    "stockAPI": this.fb.control(this.defStockAPI) // Here you can do things like validating input ( See cost comp. in Bigoooo)
	});



    }

    private formSubmit3 ( value ) {
        console.log(JSON.stringify(value, null, '\t');
    }
    private formSubmit2 ( value ) {
    }

    private formSubmit ( value ) {
        let apiName = environment.api.price;
        //let param = {"one": encodeURIComponent(value.getApiCall)};
        let param = {"symbol": value.symbol,
            "interval": value.interval,
        "timePeriod": value.timePeriod,
        "priceType": value.priceType,
        "fastPeriod": value.fastPeriod,
        "slowPeriod": value.slowPeriod,
        "signalPeriod": value.signalPeriod,
        "todayOnly": value.todayOnly
        };

        let myInit = { // OPTIONAL
            headers: {},// OPTIONAL
            response: true,// OPTIONAL (return entire response object instead of response.data)
            queryStringParameters: param
        }

        // No path, passed in as ''
        let result;
        this.amplifyService.api().get(apiName, '', myInit).then(response => {
            result = response.data;
            Plotly.newPlot('volPlot', [result[2]]);
            //Plotly.newPlot('volPlot', [result[4]]);
            //Plotly.newPlot('pricePlot', [result[0], result[1], result[2], result[3]]);
            let data = result[0];
            let layout  = result[1];
            Plotly.newPlot('pricePlot', data, layout);
        }).catch(error => {
            if ( error.response && error.response.data && error.response.data.message )
                result = error.response.data.message;
            else
                result = JSON.stringify(error, null, 2);
        });

    }
}
