import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AreaAddModel } from 'src/models/area/areaAddModel';
import { AreaListModel } from 'src/models/area/areaListModel';
import { AreaUpdateModel } from 'src/models/area/areaUpdateModel';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  baseUrl = 'https://localhost:5001/api/areas';

  constructor(private readonly http: HttpClient) { }

  getAll(): Observable<AreaListModel[]>{
    return this.http.get<AreaListModel[]>(this.baseUrl);
  }

  getById(id: number): Observable<AreaListModel>{
    return this.http.get<AreaListModel>(this.baseUrl + '/' + id);
  }

  add(data): Observable<AreaAddModel>{
    return this.http.post<AreaAddModel>(this.baseUrl, data);
  }

  update(id: number, data): Observable<AreaUpdateModel>{
    return this.http.put<AreaUpdateModel>(this.baseUrl + '/' + id, data);
  }

  delete(id: number): Observable<AreaListModel>{
    return this.http.delete<AreaListModel>(this.baseUrl + '/' + id);
  }
}
