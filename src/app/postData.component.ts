import { Component } from '@angular/core';
import {dataListComponent} from './dataList.component';
import {dataService} from './data.service';

@Component({
    selector: 'post-data',
    template: `<h2> View Data </h2>
    <data-list></data-list>
      `,
    providers: <any>[dataService]
})
export class postDataComponent{

}