import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemLineListModel } from 'src/models/item-line/itemLineListModel';
import { PartnerAddModel } from 'src/models/partner/partnerAddModel';
import { PartnerListModel } from 'src/models/partner/partnerListModel';
import { PartnerUpdateModel } from 'src/models/partner/partnerUpdateModel';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  baseUrl = 'https://localhost:5001/api/partners';

  constructor(private readonly http: HttpClient) { }

  getAll(): Observable<PartnerListModel[]>{
    return this.http.get<PartnerListModel[]>(this.baseUrl);
  }

  getById(id: number): Observable<PartnerListModel>{
    return this.http.get<PartnerListModel>(this.baseUrl + '/' + id);
  }

  add(data): Observable<PartnerAddModel>{
    return this.http.post<PartnerAddModel>(this.baseUrl, data);
  }

  update(id: number, data): Observable<PartnerUpdateModel>{
    return this.http.put<PartnerUpdateModel>(this.baseUrl + '/' + id, data);
  }

  delete(id: number): Observable<any>{
    return this.http.delete<any>(this.baseUrl + '/' + id);
  }

  getPartnerLines(id: number): Observable<ItemLineListModel[]>{
    return this.http.get<ItemLineListModel[]>(this.baseUrl + '/GetPartnerLines/' + id);
  }

  getByIdWithAreaAndVillage(id: number): Observable<PartnerListModel>{
    return this.http.get<PartnerListModel>(this.baseUrl + '/GetByIdWithAreaAndVillage/' + id);
  }
}
