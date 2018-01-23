import {Component} from '@angular/core';
//import {dataService} from './data.service';
//import {Data} from './data';
import {Router} from '@angular/router';
import {LoginService, User} from './login.service'
import {LoginService1} from './LoginService1';
import {LoginData} from './LoginData';

@Component({
selector:'login-page',
templateUrl:'./loginPage.html',
providers: [LoginService1],
styleUrls:['./loginPage.css']
})

export class LoginComponent {
 // public user1 = new User('');
 public user= new LoginData('');
 public errorMsg = '';
 
    constructor(
        private _service:LoginService1) {}
 
    login() {
        if(!this._service.login(this.user)){
            this.errorMsg = 'User Id Not found';
        }
    }
}