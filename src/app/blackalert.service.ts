import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class BlackalertService {

  baseURL:String = "https://blackalertapp.herokuapp.com/users/"

  getBlackouts(blackoutId:number):Observable<any>{
    blackoutId = 1
    return this.http.get<any>(`https://blackalertapp.herokuapp.com/blackouts/${blackoutId}/users`
    )
  }

  addUser(user:User){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(user);
    console.log(user) 
 
    return this.http.post<User>(this.baseURL + 'new', body,{'headers':headers})
  }

  constructor(private http:HttpClient ) { }

}
