import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SectorsResponse } from 'src/app/models/response/sectors-response.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class SectorService {
  constructor(private http: HttpClient) { }

  getSectors(): Observable<SectorsResponse> {
    return this.http.get<SectorsResponse>(environment.sectorsApiUrl);
  }
}