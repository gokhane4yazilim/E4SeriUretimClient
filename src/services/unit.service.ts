import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UnitAddModel } from 'src/models/unit/unitAddModel';
import { UnitListModel } from 'src/models/unit/unitListModel';
import { UnitUpdateModel } from 'src/models/unit/unitUpdateModel';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  baseUrl = 'https://localhost:5001/api/units';

  constructor(private readonly http: HttpClient) { }

  getAll(): Observable<UnitListModel[]>{
    return this.http.get<UnitListModel[]>(this.baseUrl);
  }

  getById(id: number): Observable<UnitListModel>{
    return this.http.get<UnitListModel>(this.baseUrl + '/' + id);
  }

  add(data): Observable<UnitAddModel>{
    return this.http.post<UnitAddModel>(this.baseUrl, data);
  }

  update(id: number, data): Observable<UnitUpdateModel>{
    return this.http.put<UnitUpdateModel>(this.baseUrl + '/' + id, data);
  }

  delete(id: number): Observable<UnitListModel>{
    return this.http.delete<UnitListModel>(this.baseUrl + '/' + id);
  }
}
