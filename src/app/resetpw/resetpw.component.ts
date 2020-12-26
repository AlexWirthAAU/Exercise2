import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-resetpw',
  templateUrl: './resetpw.component.html',
  styleUrls: ['./resetpw.component.css']
})
export class ResetpwComponent implements OnInit {

  formData: any;
  formValidation: boolean = false;
  isVerified: boolean = false;
  resetToken: string;

  constructor(public router: Router, public api: ApiService, public auth: AuthService, public route: ActivatedRoute) {

    this.route.params.subscribe(
      params => {
        this.resetToken = params.token;
      }

    )
  }

  ngOnInit(): void {
  }

}
