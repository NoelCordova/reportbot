import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportbotService {

  constructor(private http: HttpClient) { }

  getChampions() {
    return this.http.get('/api/champions');
  }

}
