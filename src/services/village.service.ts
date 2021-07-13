import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VillageAddModel } from 'src/models/village/villageAddModel';
import { VillageListModel } from 'src/models/village/villageListModel';
import { VillageUpdateModel } from 'src/models/village/villageUpdateModel';

@Injectable({
  providedIn: 'root'
})
export class VillageService {

  baseUrl = 'https://localhost:5001/api/villages';

  constructor(private readonly http: HttpClient) { }

  getAll(): Observable<VillageListModel[]>{
    return this.http.get<VillageListModel[]>(this.baseUrl);
  }

  getById(id: number): Observable<VillageListModel>{
    return this.http.get<VillageListModel>(this.baseUrl + '/' + id);
  }

  add(data): Observable<VillageAddModel>{
    return this.http.post<VillageAddModel>(this.baseUrl, data);
  }

  update(id: number, data): Observable<VillageUpdateModel>{
    return this.http.put<VillageUpdateModel>(this.baseUrl + '/' + id, data);
  }

  delete(id: number): Observable<VillageListModel>{
    return this.http.delete<VillageListModel>(this.baseUrl + '/' + id);
  }

  getAllByAreaId(id: number): Observable<VillageListModel[]>{
    return this.http.get<VillageListModel[]>(this.baseUrl + '/GetAllByAreaId/' + id);
  }
}
