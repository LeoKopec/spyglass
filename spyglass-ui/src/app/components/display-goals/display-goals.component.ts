import { Component, OnInit } from '@angular/core';
import { Goal } from 'src/app/models/goal.model';
import { User } from 'src/app/models/user.model';
import { GoalService } from 'src/app/services/goal.service';
import { HomeDisplayDataService } from 'src/app/services/home-display-data.service';
import {ConfirmationService} from 'primeng/api';
import { Router } from '@angular/router';
import { DisplayGoalDataService } from 'src/app/services/display-goal-data.service';
import { FormControl, FormGroup, Validators} from '@angular/forms'

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
  passGoal: Goal = new Goal();
  goalFromHome: Goal = new Goal();
  isDisplay = true;
  isDisplayNewGoal = true;
  updatedGoal :Goal = new Goal();
  newGoal :Goal = new Goal();
  updateForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    currentAmount: new FormControl('', Validators.required),
    totalAmount: new FormControl('', Validators.required),
  })
  newGoalForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    currentAmount: new FormControl('', Validators.required),
    totalAmount: new FormControl('', Validators.required),
  })

  constructor(service: GoalService, private dataService: HomeDisplayDataService, private confirmationService: ConfirmationService, private router: Router, private goalDataService: DisplayGoalDataService) {
    this.service = service;
    this.username = '';
  }

  ngOnInit(): void {
    this.dataService.currentUser.subscribe(passUser => this.userFromHome = passUser)
    this.service.findByUsername(this.userFromHome.username).subscribe(data => {
      this.goals = data;
    });
    this.service.refreshrequired.subscribe(response => {
      this.service.findByUsername(this.userFromHome.username).subscribe(data => {
        this.goals = data;
      });
    })
  this.goalDataService.currentGoal.subscribe(passGoal => this.goalFromHome = passGoal)
  console.log(this.userFromHome)
  }

  toggleDisplay(){
    this.isDisplay = !this.isDisplay;
  }

  toggleDisplayNewGoal(){
    this.isDisplayNewGoal = !this.isDisplayNewGoal;
  }

  sendDataToView(displayGoal :Goal) {
    this.goalDataService.editGoal(displayGoal)
    this.gotToViewGoal();
  }

  getGoals() :void {
    this.service.findByUsername(this.username).subscribe(data => {
      this.goals = data;
    })
  }

  onDelete(id :number): void {
    this.service.deleteGoal(id).subscribe(data => {
      console.log(data);
    })
  }

  confirm(id: number){
    console.log("clicked")
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this goal?',
        accept: () => {
          this.onDelete(id);
        }
    });
  }

  gotToViewGoal() {
    this.router.navigate(['/viewGoal']);
  }

  convertGoal(goal :Goal) {
    this.updatedGoal = Object.assign({}, goal);
    this.updatedGoal.user = this.userFromHome;
    console.log(this.updatedGoal);
  }

  submit(goal :Goal, id :number) :void {
    this.service.updateGoal(goal, id).subscribe(resp => {

    });
    this.toggleDisplay();
  }

  saveGoal(){
    this.newGoal.user = this.userFromHome;
    this.service.save(this.newGoal).subscribe(resp => {
      console.log(resp);
    });
    this.toggleDisplayNewGoal();
  }
}
