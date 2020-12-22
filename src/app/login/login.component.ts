import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formData: any;
  formValidation: boolean = false;

  constructor(public auth: AuthService, public api: ApiService) { }

  ngOnInit(): void {
    this.formData = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  loadUserData() {
    
    this.api.getUserData().subscribe(
      data => {
        this.auth.setUser(data);
        console.log("User: ", this.auth.getUser())
      }, //success path
      error => {
        console.log(error);
      } //error path
    )
  }

  submitForm() {
    this.formValidation = true;
    if(this.formData.value.email !== "" && this.formData.value.password !== "") {
      this.auth.login(this.formData.value.email, this.formData.value.password).subscribe(
        response => {
          localStorage.setItem('access_token', response.token);
          this.loadUserData();
        }, //success path
        error => {
          console.log(error);
        } //error path
      )
    }
  }

}
