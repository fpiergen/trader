import { Component, OnInit } from '@angular/core';
import * as Plotly from 'plotly.js';
import { TraderService } from './trader.service';
import { AmplifyService }  from 'aws-amplify-angular';
import { environment } from './../../environments/environment';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-macd',
  templateUrl: './macd.component.html',
  styleUrls: ['./macd.component.css']
})

export class MacdComponent implements OnInit {

    formMacd: FormGroup;
    formRsi: FormGroup;
    private result: string;
    private macdCompany: string;
    private rsiCompany: string;
    private currentSymbol: string = 'PVTL';
    private currentInterval: string = '15min';
    private currentTimePeriod: number = 12;
    private currentPriceType: string = 'open';
    private currentTodayOnly: boolean = true;

  //constructor(public traderService: TraderService) { }
  constructor(public amplifyService: AmplifyService, private fb: FormBuilder ){}

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


  ngOnInit() {
      this.formMacd = this.fb.group({
          symbol: this.fb.control(this.currentSymbol), // Here you can do things like validating input ( See cost comp. in Bigoooo)
         interval: this.fb.control(this.currentInterval), // Here you can do things like validating input ( See cost comp. in Bigoooo)
         priceType: this.fb.control(this.currentPriceType), // Here you can do things like validating input ( See cost comp. in Bigoooo)
         timePeriod: this.fb.control(this.currentTimePeriod), // Here you can do things like validating input ( See cost comp. in Bigoooo)
         fastPeriod: this.fb.control(''), // Here you can do things like validating input ( See cost comp. in Bigoooo)
         slowPeriod: this.fb.control(''), // Here you can do things like validating input ( See cost comp. in Bigoooo)
         signalPeriod: this.fb.control(''), // Here you can do things like validating input ( See cost comp. in Bigoooo)
         todayOnly: this.fb.control(this.currentTodayOnly) // Here you can do things like validating input ( See cost comp. in Bigoooo)
      });

      this.formRsi = this.fb.group({
          symbol: this.fb.control(this.currentSymbol), // Here you can do things like validating input ( See cost comp. in Bigoooo)
         interval: this.fb.control(this.currentInterval), // Here you can do things like validating input ( See cost comp. in Bigoooo)
         priceType: this.fb.control(this.currentPriceType), // Here you can do things like validating input ( See cost comp. in Bigoooo)
         timePeriod: this.fb.control(this.currentTimePeriod) // Here you can do things like validating input ( See cost comp. in Bigoooo)
      });

  }

  private btnClick(value) {
      //let data = this.traderService.test();
      //Plotly.newPlot('myDiv', data);
     this.formRsi.patchValue({symbol: value.symbol});
     this.formRsi.patchValue({interval: value.interval});
     this.formRsi.patchValue({priceType: value.priceType});
     this.formRsi.patchValue({timePeriod: value.timePeriod});

     let apiName = environment.api.macd;
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
      this.macdCompany = value.symbol;

      let myInit = { // OPTIONAL
          headers: {},// OPTIONAL
          response: true,// OPTIONAL (return entire response object instead of response.data)
          queryStringParameters: param
      }

      // No path, passed in as ''
      this.amplifyService.api().get(apiName, '', myInit).then(response => {
          //this.result = JSON.stringify(response.data, null, 2);
          this.result = response.data;
          Plotly.newPlot('mcadPlot', this.result);
      }).catch(error => {
          if ( error.response && error.response.data && error.response.data.message )
              this.result = error.response.data.message;
          else
              this.result = JSON.stringify(error, null, 2);
      });
 
  }
  private btnClick2(value) {
      //console.log( JSON.stringify(value, null, '\t');
      //let data = this.traderService.test();
      //Plotly.newPlot('myDiv', data);
      let apiName = environment.api.rsi;
      //let param = {"one": encodeURIComponent(value.getApiCall)};
      let param = {"symbol": value.symbol,
          "interval": value.interval,
          "timePeriod": value.timePeriod,
          "priceType": value.priceType
      };
      this.rsiCompany = value.symbol;

      let myInit = { // OPTIONAL
          headers: {}, // OPTIONAL
          response: true, // OPTIONAL (return entire response object instead of response.data)
          queryStringParameters: param
      }

      // No path, passed in as ''
      this.amplifyService.api().get(apiName, '', myInit).then(response => {
          //this.result = JSON.stringify(response.data, null, 2);
          this.result = response.data;
          Plotly.newPlot('rsiPlot', this.result);
      }).catch(error => {
          if ( error.response && error.response.data && error.response.data.message )
              this.result = error.response.data.message;
          else
              this.result = JSON.stringify(error, null, 2);
      });
  }
}
