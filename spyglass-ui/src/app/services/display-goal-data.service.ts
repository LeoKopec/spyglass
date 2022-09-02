import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Goal } from '../models/goal.model';

@Injectable({
  providedIn: 'root'
})
export class DisplayGoalDataService {

  private defaultGoal = new BehaviorSubject<Goal>(new Goal())

  currentGoal = this.defaultGoal.asObservable();

  constructor() { }

  editGoal(goalFromDisplay: Goal) {
    this.defaultGoal.next(goalFromDisplay);
  }
}
