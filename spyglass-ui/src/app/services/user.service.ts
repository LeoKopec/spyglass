import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  saveUser(user :User) :Observable<any> {
    return this.http.post(environment.api.root + environment.api.users, user)
  }

  findByUsername(username: string) :Observable<any> {
    return this.http.get(environment.api.root + environment.api.users + "username/" + username);
  }
}
