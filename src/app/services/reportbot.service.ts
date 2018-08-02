import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportbotService {

  constructor(private http: HttpClient) { }

  getChampions() {
    if ( !environment.production ) {
      return this.http.get(`${ environment.api }/api/champions`);
    } else {
      return this.http.get('/api/champions');
    }
  }

  getChampionInfo(id:string) {
    if ( !environment.production ) {
      return this.http.get(`${ environment.api }/api/champion/${ id }`);
    } else {
      return this.http.get(`/api/champion/${ id }`);
    }
  }

}
