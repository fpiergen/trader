import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AmplifyService }  from 'aws-amplify-angular';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

// This should have been called news. We are handling headline and all news here
export class NewsComponent implements OnInit {

  private result: Object;
  private result1: string = "<h1>HELLO</h1>";

  @Input('parentForm')
  public parentForm: FormGroup;

  constructor(public amplifyService: AmplifyService) { }

  ngOnInit() {
  }

  private headlineNews(valueArray) {

        let apiName = environment.api.headlineNews;

        let value = valueArray[0];

        let param = {"country": value.country,
            "newsCategory": value.newsCategory
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

  private allNews(valueArray) {

        let apiName = environment.api.allNews;

        let value = valueArray[0];

        let param = {"filterOn": value.grepFilter};

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
