import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup
  private firstName:FormControl
  private lastName:FormControl

  constructor(private router:Router, private authService:AuthService) { }

  ngOnInit(): void {
  this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')])
this.lastName = new FormControl(this.authService.currentUser.lastName, [Validators.required, Validators.pattern('[a-zA-Z].*')])
this.profileForm = new FormGroup({
  firstName: this.firstName,
  lastName: this.lastName
})
}

validateFirstName(){
 return this.firstName.valid || this.firstName.untouched
}

validateLastName(){
  return this.lastName.valid || this.lastName.untouched
 }

saveProfile(formValues){
  if (this.profileForm.valid){
  this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
  this.router.navigate(['events'])
}
}
cancel() {
  this.router.navigate(['events'])
}
}