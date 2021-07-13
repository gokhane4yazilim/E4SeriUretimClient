import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DivisionAddModel } from 'src/models/division/divisionAddModel';
import { DivisionListDto } from 'src/models/division/divisionListDto';
import { DivisionUpdateModel } from 'src/models/division/divisionUpdateModel';

@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  baseUrl = 'https://localhost:5001/api/divisions';

  constructor(private readonly http: HttpClient) { }

  getAll(): Observable<DivisionListDto[]>{
    return this.http.get<DivisionListDto[]>(this.baseUrl);
  }

  getById(id: number): Observable<DivisionListDto>{
    return this.http.get<DivisionListDto>(this.baseUrl + '/' + id);
  }

  add(data): Observable<DivisionAddModel>{
    return this.http.post<DivisionAddModel>(this.baseUrl, data);
  }

  update(id: number, data): Observable<DivisionUpdateModel>{
    return this.http.put<DivisionUpdateModel>(this.baseUrl + '/' + id, data);
  }

  delete(id: number): Observable<DivisionListDto>{
    return this.http.delete<DivisionListDto>(this.baseUrl + '/' + id);
  }
}
