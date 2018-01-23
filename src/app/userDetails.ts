import {Component} from '@angular/core';
import { dataService } from './data.service';
import {Data} from './Data';
import {ActivatedRoute} from '@angular/router';

@Component(
    {
        selector: 'user-details',
        templateUrl:'./userDetails.html',
         styleUrls:['./dataList.component.css'],
        providers:[dataService]
    }
)
export class UserDetailComponent {
    constructor(private _dataservice: dataService, 
    private route:ActivatedRoute)
    {
        this.getUserData();
       this.GetInputValue();
    }

  private UseData:Data[]=[];
 private Error_msg:any="";
 id: number;
 public UserValue:any;

GetInputValue(){
  this.UserValue = this.route.params.subscribe(params=>{
       this.id=+params['id'];
      console.warn(this.id);
  });
}

getUserData(){
    this._dataservice.getData()
 .subscribe(
         //.then(
       UseData =>this.UseData=UseData,
       Error => this.Error_msg=<any>Error
    );
}

}