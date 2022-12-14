import { Component, OnInit } from '@angular/core';
import { Goal } from 'src/app/models/goal.model';
import { DisplayGoalDataService } from 'src/app/services/display-goal-data.service';

@Component({
  selector: 'app-view-goal',
  templateUrl: './view-goal.component.html',
  styleUrls: ['./view-goal.component.css']
})
export class ViewGoalComponent implements OnInit {

  goalFromHome: Goal = new Goal()
  percentage: any = 0;

  constructor(private goalDataService: DisplayGoalDataService) {
    
  }

  ngOnInit(): void {
    this.goalDataService.currentGoal.subscribe(passGoal => this.goalFromHome = passGoal)
    this.percentage = (this.goalFromHome.currentAmount / this.goalFromHome.totalAmount).toFixed(2)

  }

}
