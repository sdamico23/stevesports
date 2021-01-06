import { Component, OnInit } from '@angular/core';
//import { ConsoleReporter } from 'jasmine';

import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'sports-app';

  constructor(private service : AppServiceService) {

  }
  //on initialization of app 
  ngOnInit() {
    this.getDataFromApi();
  }

  getDataFromApi() {
      this.service.getData().subscribe((response) => {
      console.log('Response from the API is ', response)
    }, (error) => {
      console.log('Error is ', error);
    })
  }
}
