import { Injectable } from "@angular/core";
import {LoginData} from './LoginData';
import { Http,Response } from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class dataService1{
constructor(private httpService:Http){
}
getData(): Observable<LoginData[]> { //Promise<Data[]>{ //Observable<Post[]> {
  return this.httpService.get('http://jsonplaceholder.typicode.com/posts/')
   // return this.httpService.get('https://www.metaweather.com/api/location/search/?query=london')
    //.toPromise() //remove for observable 
    //.then(this.fetchData)
     .map(this.fetchData)  //for observable and remove
    .catch(this.handleError);
}
private fetchData(http_res:Response)
{
    let body=http_res.json();
    return body || [];
}
private handleError(http_Error:any)
{
    let err_msg=(http_Error.message)? http_Error.message :
    http_Error.status? `${http_Error.status} - ${http_Error.statusText}` : 'Server error';
    console.error(err_msg);
    return Observable.throw(err_msg);
}

}




