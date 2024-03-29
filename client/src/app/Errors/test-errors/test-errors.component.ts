import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.css']
})
export class TestErrorsComponent implements OnInit {
  
  baseUrl = 'https://localhost:5001/api/';
  validationError: string[] = [];

  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
  }

  get404Error(){
    this.http.get(this.baseUrl + 'buggy/not-found').subscribe(respone => {
      console.log(respone);
    }, error => {
      console.log(error);
    })
  }

  get400Error(){
    this.http.get(this.baseUrl + 'buggy/bad-request').subscribe(respone => {
      console.log(respone);
    }, error => {
      console.log(error);
    })
  }
  get500Error(){
    this.http.get(this.baseUrl + 'buggy/server-error').subscribe(respone => {
      console.log(respone);
    }, error => {
      console.log(error);
    })
  }
  get401Error(){
    this.http.get(this.baseUrl + 'buggy/auth').subscribe(respone => {
      console.log(respone);
    }, error => {
      console.log(error);
    })
  }
  get400ValidationError(){
    this.http.post(this.baseUrl + 'account/register',{}).subscribe(respone => {
      console.log(respone);
    }, error => {
      console.log(error);
      this.validationError = error;
    })
  }

}
