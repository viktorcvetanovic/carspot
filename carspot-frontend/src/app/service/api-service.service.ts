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

  public login(username: any, password : any){
    const params = {
      username : username,
      password : password
    };
    return this.http.get(`${environment.apiUrl}` + "/user/login" , {
      responseType: "json",
      params
    });
  }

  public createPost(post: any){
    console.log(post);
    return this.http.post(`${environment.apiUrl}` + "/posts" , post,{
      responseType: "json"
    });
  }

  public getAllPosts(){
    return this.http.get(`${environment.apiUrl}` + "/posts" , {
      responseType: "json"
    });
  }

}
