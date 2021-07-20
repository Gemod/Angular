import { Component, OnInit } from '@angular/core'
import { Form, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from './auth.service'

@Component({
  templateUrl: './profile.component.html',
  styles: [
    `
    em {float:right; color#E05C65; padding-left:10px;}
     .error input {background-color : #E3C3C5;}
     .error ::-webkit-input-placeholder {color :#999;}
     .error ::-moz-placeholder { color: #999;}
     .error :-moz-placeholder {color :#999;}
     .error :ms-input-placeholder {color : #999;} 
  `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup


  constructor(private authService: AuthService, private route: Router) {

  }

  ngOnInit() {
    let firstName = new FormControl(this.authService.currentUser.firstname, Validators.required);
    let lastName = new FormControl(this.authService.currentUser.lastname, Validators.required);
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    })
  }

  cancel() {
    this.route.navigate(['events'])
  }
  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService.updateUserInfo(formValues.firstName, formValues.lastName)
      this.route.navigate(['events'])
    }
  }
  isInvalid() {
    return this.profileForm.controls.firstName.invalid &&
      this.profileForm.controls.firstName.touched;
  }
}