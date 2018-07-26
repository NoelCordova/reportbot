import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ReportbotService } from '../../services/reportbot.service'

@Component({
  selector: 'app-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.css']
})
export class ChampionComponent implements OnInit {

  champion:any = {};
  id:string = '';

  constructor(private reportbot: ReportbotService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( params => this.id = params.id);
  }

  ngOnInit() {
    this.reportbot.getChampionInfo(this.id)
    .subscribe( (response:any) => this.champion = response );
  }

}
