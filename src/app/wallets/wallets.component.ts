import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class WalletsComponent implements OnInit {

  closeResult: string;
  walletData: any;


  constructor(public api: ApiService, public router: Router, public auth: AuthService, private modalService: NgbModal) {
    //@Zoë fix this to only access the data when valid user id
    if(this.auth.loggedIn()) {
      this.router.navigate(['/wallets'])
    }
    this.walletData = new FormGroup({
      walletName: new FormControl(''),
      walletDesc: new FormControl('')
    })

   }
   

  ngOnInit(): void {
    
  }
  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }
}
