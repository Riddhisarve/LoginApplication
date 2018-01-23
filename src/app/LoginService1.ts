import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {dataService1} from './dataservice';
import {LoginData} from './LoginData';

@Injectable()
export class LoginService1{
    
    constructor(
        private _dataService:dataService1,
        private _router:Router){
             this.getLoginData();
    }
errorMessage: string;
public Data:LoginData[]=[];
resultArray:any;
      getLoginData() {
        this._dataService.getData()
            .subscribe(
            (Data) => {this.Data = Data;
            this.resultArray = this.Data.map(function(a) {return a["id"];});
      },
            error => this.errorMessage = <any>error);
      }

    logout(){
        localStorage.removeItem("user");
        this._router.navigate(['Login']);
    }

  login(user){
      try{
 
  //let Data1=[this.Data[user.id-1]];
  //let Data2=([this.Data[user.id-1].id]);
  //console.warn(Id);
  //console.warn(user.id);
  //console.warn(this.resultArray);
  //console.warn(this.Data);


  var authenticatedUser = this.resultArray.find (u => u == user.id);
// var authenticatedUser = this.Data.find (u => u == user.id);
    if (authenticatedUser){
      localStorage.setItem("user", JSON.stringify(authenticatedUser));
      localStorage.setItem
      this._router.navigate(['/UserDetails',user.id]); 
      console.warn('true');     
      return true;
    }
    console.warn('not authenticate');
    return false;
  }
 catch(error){
       console.warn('error');
       return false;
    }
  }
  
  checkCredential(){
      if (localStorage.getItem("user") === null){
          this._router.navigate(['Login']);
      }
  }
}

