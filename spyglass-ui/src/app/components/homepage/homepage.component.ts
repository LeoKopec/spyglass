import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { FormControl, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import {ConfirmationService} from 'primeng/api';
import { HomeDisplayDataService } from 'src/app/services/home-display-data.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [MessageService]
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

  constructor(service: UserService, private router: Router, private confirmationService: ConfirmationService, private messageService: MessageService, private dataService: HomeDisplayDataService) {
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
    this.toggleDisplay();
    this.showSuccess();
  }


  gotToGoals() {
    this.router.navigate(['/goals']);
  }

  checkSignIn() {
    this.service.findByUsername(this.username).subscribe(data => {
      this.signInUser = data;
    })
  }

  confirm(){
    this.confirmationService.confirm({
      message: "Press 'Yes' to continue to goals",
      key: "sign-in",
      accept: () => {
          console.log(this.signInUser)
          
          try {
            if (this.signInUser.password == this.password) {
              this.sendData();
              this.gotToGoals();
            } else {
              this.showError();
            }
          } catch (error) {
            console.log("Caught")
            this.showErrorBadUsername();
          }

      }
  });
  }


  showError() {
    this.messageService.add({key: 'tr', 
                             severity:'error', 
                             summary: 'Incorrect Password', 
                             detail: 'Try to sign-in again using correct password'});
}
showErrorBadUsername() {
  this.messageService.add({key: 'tr2', 
                           severity:'error', 
                           summary: 'Invalid Username', 
                           detail: 'Unable to find find account under the entered username'});
}
showErrorFailedCreation() {
  this.messageService.add({key: 'tr3', 
                           severity:'error', 
                           summary: 'Unable to Create Account', 
                           detail: 'Please fill in all fields'});
}
showSuccess() {
  this.messageService.add({key: 'tr4', 
                           severity:'success', 
                           summary: 'Account Created!', 
                           detail: 'Sign-in to create some goals'});
}
  
}
