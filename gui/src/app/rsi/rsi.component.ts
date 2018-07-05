import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from './../../environments/environment';
import * as Plotly from 'plotly.js';
import { AmplifyService }  from 'aws-amplify-angular';

@Component({
  selector: 'app-rsi',
  templateUrl: './rsi.component.html',
  styleUrls: ['./rsi.component.css']
})
export class RsiComponent implements OnInit {

    private symbol: string;
    private interval: string;
    private priceType: string;

    @Input('parentForm')
    public parentForm: FormGroup;
    constructor(public amplifyService: AmplifyService) { }

    ngOnInit() {
    }

    private rsi(valueArray) {
        let value = valueArray[0];
        let apiName = environment.api.rsi;
        //let param = {"one": encodeURIComponent(value.getApiCall)};
        let param = {"symbol": value.symbol,
            "interval": value.interval,
        "timePeriod": value.timePeriod,
        "priceType": value.priceType,
        "todayOnly": value.todayOnly
        };

        let myInit = { // OPTIONAL
            headers: {}, // OPTIONAL
            response: true, // OPTIONAL (return entire response object instead of response.data)
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
            Plotly.newPlot('rsiPlot1', result);
        }).catch(error => {
            if ( error.response && error.response.data && error.response.data.message )
                result = error.response.data.message;
            else
                result = JSON.stringify(error, null, 2);
        });
    }
}
