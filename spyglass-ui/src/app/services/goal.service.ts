import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Goal } from '../models/goal.model';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  http: HttpClient
  refreshrequired = new Subject<void>;

  get Refreshrequired() {
    return this.refreshrequired
  }

  constructor(http: HttpClient) {
    this.http = http;
  }

  findByUsername(username: string) :Observable<any> {
    return this.http.get(environment.api.root + environment.api.goals + "username/" + username);
  }

  deleteGoal(id: number) :Observable<any> {
    return this.http.delete(environment.api.root + environment.api.goals + id).pipe(
      tap(()=>{
        this.Refreshrequired.next();
      })
    );;
  }

  updateGoal(goal: Goal, id: number) :Observable<any> {
    return this.http.put(environment.api.root + environment.api.goals + id, goal).pipe(
      tap(()=>{
        this.Refreshrequired.next();
      })
    );
  }

}
