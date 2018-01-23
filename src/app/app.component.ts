import { Component } from '@angular/core';
import {postDataComponent} from './postData.component';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  template: `
  
       <router-outlet></router-outlet>
        <!-- <post-data> </post-data>-->
            `,
 styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
}
