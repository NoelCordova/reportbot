import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ReportbotService } from '../../services/reportbot.service'

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {

  data = {};

  constructor(private reportbot: ReportbotService, private http: HttpClient) { }

  ngOnInit() {
    this.reportbot.getChampions().subscribe( response => {
      this.data = response;
    });
  }

}
