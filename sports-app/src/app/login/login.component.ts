import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service : AppServiceService) { }

  ngOnInit(): void {
  }

  authLogin() {
    this.service.auth().subscribe((response) => {
    console.log('Response from the API is ', response)
  }, (error) => {
    console.log('Error is ', error);
  })
}

home() {
  this.service.home().subscribe((response) => {
  console.log('Response from the API is ', response)
}, (error) => {
  console.log('Error is ', error);
})
}

}
