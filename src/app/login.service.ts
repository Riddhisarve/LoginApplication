import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {dataService} from './data.service';
import {LoginData} from './LoginData';

export class User{
  constructor(
       // public email:string,
      //  public password:string
      public userId:string
        )
        { }
}
let users=[ 
    new User ('1'),
    new User ('2')
  // new User('admin@millenium.com','abc123'),
  //  new User ('admin@millenium.com','abc321')
];

//let users1= new Data ();
//users1.getData();


@Injectable()
export class LoginService{
    constructor(private _router:Router){
    }

    logout(){
        localStorage.removeItem("user");
        this._router.navigate(['Login']);
    }

  login(user){
     //  console.warn(user);
      console.warn(users);
  var authenticatedUser = users.find (u => u.userId === user.userId);
    if (authenticatedUser){
      localStorage.setItem("user", JSON.stringify(authenticatedUser));
      localStorage.setItem
      this._router.navigate(['/home']);      
      return true;
    }
    return false;
 
  }
  checkCredential(){
      if (localStorage.getItem("user") === null){
          this._router.navigate(['Login']);
      }
  }
}

