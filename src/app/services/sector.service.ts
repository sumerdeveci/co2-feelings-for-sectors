import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SectorsResponse } from 'src/app/models/sector.model';

@Injectable({
  providedIn: 'root',
})
export class SectorService {
  private apiUrl = 'https://taxonomy-service-prod.prod.normative.io/taxonomy/nace/node/10.00';

  constructor(private http: HttpClient) { }

  getSectors(): Observable<SectorsResponse> {
    return this.http.get<SectorsResponse>(this.apiUrl);
  }
}