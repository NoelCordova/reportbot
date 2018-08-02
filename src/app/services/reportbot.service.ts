import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportbotService {

  constructor(private http: HttpClient) { }

  getChampions() {
    // return this.http.get('http://localhost:8080/api/champions');
    if ( !environment.production ) {
      return this.http.get('http://localhost:8080/api/champions');
    } else {
      return this.http.get('/api/champions');
    }
  }

  getChampionInfo(id:string) {
    return this.http.get(`http://localhost:8080/api/champion/${id}`);
  }

}
