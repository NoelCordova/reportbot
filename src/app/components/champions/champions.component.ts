import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { ReportbotService } from '../../services/reportbot.service'

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {

  champions:any[] = [];

  constructor(private reportbot: ReportbotService, private router: Router) { }

  ngOnInit() {
    this.reportbot.getChampions()
    .subscribe( (response:any) => this.champions = response);
  }

  viewChampion(champion:string) {
    this.router.navigate(['/champion', champion]);
  }

}
