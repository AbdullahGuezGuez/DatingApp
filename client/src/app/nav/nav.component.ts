import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from 'src/_services/account.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(public accountService: AccountService ) { }

  ngOnInit(): void {
  }

  login(){
    this.accountService.login(this.model).subscribe(respone => {
      console.log(respone);
    }, error => {
      console.log(error);
    })
  }

  
  logout(){
      this.accountService.logout();
      console.log("logged out");
  }
}