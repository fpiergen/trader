import { Component, OnInit, Input } from '@angular/core';
import { AmplifyService }  from 'aws-amplify-angular';
import { environment } from './../../environments/environment';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

    private  result = {};


  @Input('parentForm')
  public parentForm: FormGroup;
  constructor(public amplifyService: AmplifyService) { }

  ngOnInit() {
  }

  private callAPI(value) {
      let apiName = environment.api.other;

      let param = {
          "stockAPI": value.stockAPI,
          "function": value.function,
          "arguments": value.arguments
      };

      let myInit = { // OPTIONAL
          headers: {}, // OPTIONAL
          response: true, // OPTIONAL (return entire response object instead of response.data)
          queryStringParameters: param
      }

      // No path, passed in as ''
      this.amplifyService.api().get(apiName, '', myInit).then(response => {
          this.result = response.data;
      }).catch(error => {
          if ( error.response && error.response.data && error.response.data.message )
              this.result = error.response.data.message;
          else
              this.result = JSON.stringify(error, null, 2);
      });

  }

}
