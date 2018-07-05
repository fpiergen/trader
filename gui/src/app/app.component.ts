import { OnInit, Component } from '@angular/core';
import Amplify from 'aws-amplify';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    title = 'MyTrader';
    ngOnInit() {
        Amplify.configure(environment.amplify)
    }
}
