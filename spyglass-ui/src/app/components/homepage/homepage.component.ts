import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { FormControl, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import {ConfirmationService} from 'primeng/api';
import { NotificationsService } from 'angular2-notifications';
import { HomeDisplayDataService } from 'src/app/services/home-display-data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  service: UserService;
  isDisplay = true;
  isDisplaySign = true;
  user = new User();
  username: string = '';
  password: string = '';
  signInUser: any = {};
  passUser: User = new User();
  userFromHome = new User();
  createForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required,)
  })
  signInForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(service: UserService, private router: Router, private confirmationService: ConfirmationService, private animationService: NotificationsService, private dataService: HomeDisplayDataService) {
    this.service = service
  }

  ngOnInit(): void {
    this.dataService.currentUser.subscribe(passUser => this.userFromHome = passUser)
  }

  sendData() {
    this.dataService.editUser(this.signInUser)
  }

  toggleDisplay(){
    this.isDisplay = !this.isDisplay;
  }
  toggleDisplaySign() {
    this.isDisplaySign = !this.isDisplaySign;
  }

  submit(user :User) :void {
    this.service.saveUser(user).subscribe(resp => {
      console.log(resp);
    });
    this.goTo();
  }

  goTo() {
    this.router.navigate(['/newGoal']);
  }

  gotToGoals() {
    this.router.navigate(['/goals']);
  }

  checkSignIn() {
    this.service.findByUsername(this.username).subscribe(data => {
      this.signInUser = data;
    })
    console.log(this.signInUser);
  }

  confirm(){
    this.confirmationService.confirm({
      message: 'Are you ready to check out your goals?',
      accept: () => {
          console.log(this.signInUser)
          if (this.signInUser.password == this.password) {
            this.sendData();
            this.gotToGoals();
          } else {
            console.log("Incorrect Password")
          }
      }
  });
  }
  // onFailure(message: any){
  //   this.animationService.error('Success!', message, {
  //     position: ['center'],
  //     timeOut: 2000,
  //     animate: 'fade',
  //     showProgressBar: true
  //   });
  //   console.log("Toast")
  // }
  
}
