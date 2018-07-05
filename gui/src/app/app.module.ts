import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './app.material.module';
import { TraderService } from './macd/trader.service';
import { AmplifyService } from 'aws-amplify-angular';
//import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
//import * as Algotrader from 'algotrader';

import { AppComponent } from './app.component';
import { MacdComponent } from './macd/macd.component';
import { MyTraderComponent } from './my-trader/my-trader.component';
import { Macd1Component } from './macd1/macd1.component';
import { RsiComponent } from './rsi/rsi.component';
import { NewsComponent } from './news/news.component';
import { OtherComponent } from './other/other.component';

@NgModule({
  declarations: [
    AppComponent,
    MacdComponent,
    MyTraderComponent,
    Macd1Component,
    RsiComponent,
    NewsComponent,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
//    AmplifyAngularModule
//    Algotrader
  ],
  providers: [TraderService, AmplifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
