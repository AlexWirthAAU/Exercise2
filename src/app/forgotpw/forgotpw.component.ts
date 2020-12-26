import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-forgotpw',
  templateUrl: './forgotpw.component.html',
  styleUrls: ['./forgotpw.component.css']
})
export class ForgotpwComponent implements OnInit {

  formData: any;
  formValidation: boolean = false;
  message: string = null;

  constructor(public api: ApiService) {
    this.formData = new FormGroup({
      email: new FormControl('', Validators.required),
    })
   }

  ngOnInit(): void {
  }

  submitForm() {
    this.formValidation = true;
    if (this.formData.value.email != "") {
      this.api.forgotpwRequest(this.formData.value).subscribe(
        data => {
          console.log(data);
          this.message = "Du bekommst demnächst eine Mail mit der weiteren Vorgehensweise."
        }, //success path
        error => {
          console.log(error);
        } //error path
      )
    }
  }

}
