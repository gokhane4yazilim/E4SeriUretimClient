import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SettingListModel } from 'src/models/setting/settingListModel';
import { SettingUpdateModal } from 'src/models/setting/settingUpdateModal';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  baseUrl = 'https://localhost:5001/api/settings';

  constructor(private readonly http: HttpClient) { }

  getSetting(): Observable<SettingListModel>{
    return this.http.get<SettingListModel>(this.baseUrl);
  }

  update(id: number, data): Observable<SettingUpdateModal>{
    return this.http.put<SettingUpdateModal>(this.baseUrl + '/' + id, data);
  }
}
