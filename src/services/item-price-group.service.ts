import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemPriceGroupAddModel } from 'src/models/item-price-group/itemPriceGroupAddModel';
import { ItemPriceGroupListModel } from 'src/models/item-price-group/itemPriceGroupListModel';
import { ItemPriceGroupUpdateModel } from 'src/models/item-price-group/itemPriceGroupUpdateModel';

@Injectable({
  providedIn: 'root'
})
export class ItemPriceGroupService {

  baseUrl = 'https://localhost:5001/api/itemPriceGroups';

  constructor(private readonly http: HttpClient) { }

  getAll(): Observable<ItemPriceGroupListModel[]>{
    return this.http.get<ItemPriceGroupListModel[]>(this.baseUrl);
  }

  getById(id: number): Observable<ItemPriceGroupListModel>{
    return this.http.get<ItemPriceGroupListModel>(this.baseUrl + '/' + id);
  }

  add(data): Observable<ItemPriceGroupAddModel>{
    return this.http.post<ItemPriceGroupAddModel>(this.baseUrl, data);
  }

  update(id: number, data): Observable<ItemPriceGroupUpdateModel>{
    return this.http.put<ItemPriceGroupUpdateModel>(this.baseUrl + '/' + id, data);
  }

  delete(id: number): Observable<ItemPriceGroupListModel>{
    return this.http.delete<ItemPriceGroupListModel>(this.baseUrl + '/' + id);
  }

  getByAreaId(id: number): Observable<ItemPriceGroupListModel>{
    return this.http.get<ItemPriceGroupListModel>(this.baseUrl + '/GetByAreaId/' + id);
  }
}
