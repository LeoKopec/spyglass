import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class HomeDisplayDataService {

  private defaultUser = new BehaviorSubject<User>(new User());

  currentUser = this.defaultUser.asObservable();

  constructor() { }

  editUser(userFromHome: User) {
    this.defaultUser.next(userFromHome);
  }
}
