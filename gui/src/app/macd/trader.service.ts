import { Injectable } from '@angular/core';
//import * as Algotrader from 'algotrader';

//var algotrader = require('algotrader');
import { AmplifyService }  from 'aws-amplify-angular';

@Injectable()
export class TraderService {

  constructor() { 




      const ALPHA_VANTAGE_API_KEY = "7OL3MEMA5A775A1O";
      //declare  var algotrader: any;
      /*
      if ( IEX ) {
          console.log('something');
      } else {

          console.log('not something');
      }
     */

      /*
      const Query = Algotrader.Data.Query;
      const Stream = Algotrader.Data.Stream;
      const AlphaVantage = Algotrader.Data.AlphaVantage;
      const av = new AlphaVantage(ALPHA_VANTAGE_API_KEY);
     */

  }

  test2() {

  }

  test() : Array<Object> {

      //const IEX = this.algotrader.Data.IEX;
      let trace1 = {
	  x: [1, 2, 3, 4], 
	  y: [10, 15, 13, 17], 
	  type: 'scatter'
      };
      let trace2 = {
	  x: [1, 2, 3, 4], 
	  y: [16, 5, 11, 9], 
	  type: 'scatter'
      };

      let data = [trace1, trace2];

      return data;

  }
}
