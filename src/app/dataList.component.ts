import { Component } from '@angular/core';
import {dataService} from './data.service';
import {Data} from './data';

@Component({
    selector: 'data-list',
    templateUrl:'./dataList.component.html',
    styleUrls:['./dataList.component.css']
})
export class dataListComponent{
    constructor(private _dataService:dataService){
      this.getDatas();  
    }
    private Datas:Data[]=[];
    private Error_msg:any="";

getDatas(){
    this._dataService.getData()
 .subscribe(
         //.then(
       Datas =>this.Datas=Datas,
       Error => this.Error_msg=<any>Error
    );
}

}