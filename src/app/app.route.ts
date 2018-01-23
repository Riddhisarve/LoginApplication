import {Routes,RouterModule} from '@angular/router';
import { AppComponent }  from './app.component';
import { dataListComponent }  from './dataList.component';
import {LoginComponent} from './loginPage';
import {AfteLogin} from './afterLogin';
import {postDataComponent} from './postData.component';
import {UserDetailComponent} from './userDetails';

export const appRoutes: Routes=[
    {path:'',component:LoginComponent},
    {path:'Login', component:LoginComponent},
    {path:'data-list', component:postDataComponent},
    {path: 'home',component: AfteLogin },
    {path:'UserDetails/:id', component:UserDetailComponent},
    {path:'**', component:LoginComponent}
];