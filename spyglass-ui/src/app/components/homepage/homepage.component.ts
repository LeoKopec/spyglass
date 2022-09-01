import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { FormControl, FormGroup, Validators} from '@angular/forms'

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

  constructor(service: UserService) {
    this.service = service
  }

  ngOnInit(): void {
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
  }


}
