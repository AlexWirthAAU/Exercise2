import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formData: any;
  formValidation: boolean;
  constructor(public api: ApiService) {
    this.formData = new FormGroup({
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirm_password: new FormControl('', Validators.required)
    })
   }

  ngOnInit(): void {
  }

  submitForm() {
    console.log("Submit")
    if(this.formData.value.username !== "" && this.formData.value.email !== "" && this.formData.value.password !== "" && this.formData.value.confirm_password !== "") {
      if(this.formData.value.password === this.formData.value.confirm_password) {
        this.formValidation = true;
        this.api.register(this.formData.value).subscribe(
          response => {
            console.log(response)
          }, //success path
          error => {
            console.error(error)
          } //error path
        );
      }
    }
  }

}
