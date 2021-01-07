import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
import { faHome, faCarSide, faCar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class WalletsComponent implements OnInit {

  closeResult: string;
  faHome = faHome;
  faCarSide = faCarSide;
  home: string;
  profileForm: any;
  allWallets: any;
  errorMessageW: string;

  walletData = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    amount: new FormControl('')
  })
  test: any;


  constructor(public auth: AuthService, public api: ApiService, public router: Router, private modalService: NgbModal) {
   this.test = new FormControl('')
    this.home = "Haus";
   }

  ngOnInit(): void {
    this.showWallets()
  }
  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }
  showWallets():void{
    console.log("works")
    this.api.showW().subscribe(
      response => {
        this.allWallets = response
        console.log(this.allWallets)
      }, //success path
      error => {
        console.error(error)
      } //error path
    );
    }
  //@Zoë currently when submitting nav link also deactivated
  createWallet(){
  if (this.walletData.value.name !== "" && this.walletData.value.description !== "" && this.walletData.value.amount !== "") {
    this.api.createW(this.walletData.value).subscribe(
      response => {
        this.router.navigate(['/'])
      }, //success path
      error => {
        console.error(error)
      } //error path
    );
  }}
  checkWallets(){
  if(this.allWallets === undefined || 0) {
    this.errorMessageW = "There are no wallets yet"
  }}
}

