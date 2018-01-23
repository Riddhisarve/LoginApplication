import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes} from '@angular/router';
import {appRoutes} from './app.route'; 

import { AppComponent } from './app.component';
import {postDataComponent} from './postData.component';
import {dataListComponent} from './dataList.component';
import {Data} from './data';
import {LoginData} from './LoginData';
import {LoginComponent} from './loginPage';
import {AfteLogin} from './afterLogin';
import {dataService1} from './dataservice';
import {UserDetailComponent} from './userDetails';

@NgModule({

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot
    (appRoutes,
    { enableTracing: true }
    )
  ],
    declarations: [
    AppComponent,
    UserDetailComponent,
    postDataComponent,
    dataListComponent,
    LoginComponent,
    AfteLogin
  ],
   providers: [dataService1],
  bootstrap: [AppComponent]
})
export class AppModule { }
