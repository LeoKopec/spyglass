import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  http: HttpClient

  constructor(http: HttpClient) {
    this.http = http;
  }

  findByUsername(username: string) :Observable<any> {
    return this.http.get(environment.api.root + environment.api.goals + "username/" + username);
  }
}
