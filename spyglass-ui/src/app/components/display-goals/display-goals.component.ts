import { Component, OnInit } from '@angular/core';
import { Goal } from 'src/app/models/goal.model';
import { User } from 'src/app/models/user.model';
import { GoalService } from 'src/app/services/goal.service';
import { HomeDisplayDataService } from 'src/app/services/home-display-data.service';

@Component({
  selector: 'app-display-goals',
  templateUrl: './display-goals.component.html',
  styleUrls: ['./display-goals.component.css']
})
export class DisplayGoalsComponent implements OnInit {

  service: GoalService;
  goals: Array<Goal> = [];
  username: string;
  userFromHome = new User();

  constructor(service: GoalService, private dataService: HomeDisplayDataService) {
    this.service = service;
    this.username = '';
  }

  ngOnInit(): void {
    this.dataService.currentUser.subscribe(passUser => this.userFromHome = passUser)
    this.service.findByUsername(this.userFromHome.username).subscribe(data => {
      this.goals = data;
    })
  }

  getGoals() :void {
    this.service.findByUsername(this.username).subscribe(data => {
      this.goals = data;
    })
  }
}
