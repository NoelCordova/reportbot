import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Http example

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data = {};

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/api/ejemplo').subscribe( response => {
      this.data = response;
    });
  }

}
