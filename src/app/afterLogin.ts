import{Component} from '@angular/core';
import {LoginService} from './login.service'

@Component({
    selector:'login-form',
    providers:[LoginService],
    template:   ` <div class="">

    <div class="content">
    <span> Congratulations, you have successfully logged in !! </span>
    <br/>
    <nav>
    <a routerLink="/data-list" routerLinkActive="active">Data Details</a>
    <a routerLink="/UserDetails" routerLinkActive="active">User Details</a>
    <a routerLink="/Other-details" routerLinkActive="active">Other Details</a>
    </nav>
     
    <br/> 
 </div>  
    `
})

export class AfteLogin{
  constructor( private _loginservice:LoginService){
    }

    ngOnInit(){
        this._loginservice.checkCredential();
    }

    logout(){
        this._loginservice.logout();
    }
}
