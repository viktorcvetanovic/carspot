import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "./env";
import {User} from "./data/User";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  public register(user : any){
    console.log(user);
    return this.http.post(`${environment.apiUrl}` + "/user/register" , user,{
      responseType: "json"
    });
  }

}
