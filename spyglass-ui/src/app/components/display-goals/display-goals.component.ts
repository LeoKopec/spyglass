import { Component, OnInit } from '@angular/core';
import { Goal } from 'src/app/models/goal.model';
import { GoalService } from 'src/app/services/goal.service';

@Component({
  selector: 'app-display-goals',
  templateUrl: './display-goals.component.html',
  styleUrls: ['./display-goals.component.css']
})
export class DisplayGoalsComponent implements OnInit {

  service: GoalService;
  goals: Array<Goal> = [];
  username: string;

  constructor(service: GoalService) {
    this.service = service;
    this.username = '';
  }

  ngOnInit(): void {
  }

  getGoals() :void {
    this.service.findByUsername(this.username).subscribe(data => {
      this.goals = data;
    })
  }
}
