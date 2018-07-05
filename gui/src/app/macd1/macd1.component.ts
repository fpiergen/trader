import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from './../../environments/environment';
import * as Plotly from 'plotly.js';
import { AmplifyService }  from 'aws-amplify-angular';

@Component({
  selector: 'app-macd1',
  templateUrl: './macd1.component.html',
  styleUrls: ['./macd1.component.css']
})

export class Macd1Component implements OnInit {

    private symbol: string;
    private interval: string;
    private priceType: string;

    @Input('parentForm')
    public parentForm: FormGroup;

    constructor(public amplifyService: AmplifyService) { }

    ngOnInit() {
    }

    private macd(valueArray) {
        let value = valueArray[0];
        let apiName = environment.api.macd;
        //let param = {"one": encodeURIComponent(value.getApiCall)};
        let param = {
            "symbol": value.symbol,
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
            //this.result = JSON.stringify(response.data, null, 2);
            result = response.data;
            this.symbol = value.symbol;
            this.interval = value.interval;
            this.priceType = value.priceType;
            Plotly.newPlot('macdPlot1', result);
        }).catch(error => {
            if ( error.response && error.response.data && error.response.data.message )
                result = error.response.data.message;
            else
                result = JSON.stringify(error, null, 2);
        });

    }
}
