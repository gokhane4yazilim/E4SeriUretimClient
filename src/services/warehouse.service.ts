import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WarehouseAddDto } from 'src/models/warehouse/warehouseAddDto';
import { WarehouseListDto } from 'src/models/warehouse/warehouseListDto';
import { WarehouseUpdateDto } from 'src/models/warehouse/warehouseUpdateDto';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  baseUrl = 'https://localhost:5001/api/warehouses';

  constructor(private readonly http: HttpClient) { }

  getAll(): Observable<WarehouseListDto[]>{
    return this.http.get<WarehouseListDto[]>(this.baseUrl);
  }

  getById(id: number): Observable<WarehouseListDto>{
    return this.http.get<WarehouseListDto>(this.baseUrl + '/' + id);
  }

  add(data): Observable<WarehouseAddDto>{
    return this.http.post<WarehouseAddDto>(this.baseUrl, data);
  }

  update(id: number, data): Observable<WarehouseUpdateDto>{
    return this.http.put<WarehouseUpdateDto>(this.baseUrl + '/' + id, data);
  }

  delete(id: number): Observable<WarehouseListDto>{
    return this.http.delete<WarehouseListDto>(this.baseUrl + '/' + id);
  }
}
