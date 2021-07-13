import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemLineAddModel } from 'src/models/item-line/itemLineAddModel';
import { ItemLineListModel } from 'src/models/item-line/itemLineListModel';
import { ItemLineUpdateDto } from 'src/models/item-line/itemLineUpdateDto';
import { ItemPriceGroupListModel } from 'src/models/item-price-group/itemPriceGroupListModel';
import { ItemPriceAddModel } from 'src/models/item-price/itemPriceAddModel';
import { ItemPriceListModel } from 'src/models/item-price/itemPriceListModel';
import { ItemPriceUpdateModel } from 'src/models/item-price/itemPriceUpdateModel';
import { ItemAddModel } from 'src/models/item/itemAddModel';
import { ItemListModel } from 'src/models/item/itemListModel';
import { ItemUpdateModel } from 'src/models/item/itemUpdateModel';
import { BuyMilkDetailModel } from 'src/models/line/buyMilkDetailModel';
import { BuyMilkListModel } from 'src/models/line/buyMilkListModel';
import { SaleFoodDetailModel } from 'src/models/line/saleFoodDetailModel';
import { SaleFoodListModel } from 'src/models/line/saleFoodListModel';
import { PriceType } from 'src/models/priceType';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  baseUrl = 'https://localhost:5001/api/items';

  constructor(private readonly http: HttpClient) { }

  getAll(): Observable<ItemListModel[]>{
    return this.http.get<ItemListModel[]>(this.baseUrl);
  }

  getById(id: number): Observable<ItemListModel>{
    return this.http.get<ItemListModel>(this.baseUrl + '/' + id);
  }

  add(data): Observable<ItemAddModel>{
    return this.http.post<ItemAddModel>(this.baseUrl, data);
  }

  update(id: number, data): Observable<ItemUpdateModel>{
    return this.http.put<ItemUpdateModel>(this.baseUrl + '/' + id, data);
  }

  delete(id: number): Observable<ItemListModel>{
    return this.http.delete<ItemListModel>(this.baseUrl + '/' + id);
  }

  getAllItemPrice(id: number): Observable<ItemPriceListModel[]>{
    return this.http.get<ItemPriceListModel[]>(this.baseUrl + '/GetAllItemPrice/' + id);
  }

  getItemPriceById(id: number): Observable<ItemPriceListModel>{
    return this.http.get<ItemPriceListModel>(this.baseUrl + '/GetItemPriceById/' + id);
  }

  addItemPrice(data): Observable<ItemPriceAddModel>{
    return this.http.post<ItemPriceAddModel>(this.baseUrl + '/CreateItemPrice', data);
  }

  updateItemPrice(id: number, data): Observable<ItemPriceUpdateModel>{
    return this.http.put<ItemPriceUpdateModel>(this.baseUrl + '/UpdateItemPrice/' + id, data);
  }

  deleteItemPrice(id: number): Observable<ItemPriceListModel>{
    return this.http.delete<ItemPriceListModel>(this.baseUrl + '/DeleteItemPrice/' + id);
  }

  getAllItemLines(id: number): Observable<ItemLineListModel[]>{
    return this.http.get<ItemLineListModel[]>(this.baseUrl + '/GetAllItemLine/' + id);
  }

  getItemLineById(id: number): Observable<ItemLineListModel>{
    return this.http.get<ItemLineListModel>(this.baseUrl + '/GetItemLineById/' + id);
  }

  addItemLine(data): Observable<ItemLineAddModel>{
    return this.http.post<ItemLineAddModel>(this.baseUrl + '/CreateItemLine', data);
  }

  updateItemLine(id: number, data): Observable<ItemLineUpdateDto>{
    return this.http.put<ItemLineUpdateDto>(this.baseUrl + '/UpdateItemLine/' + id, data);
  }

  deleteItemLine(id: number): Observable<ItemLineListModel>{
    return this.http.delete<ItemLineListModel>(this.baseUrl + '/DeleteItemLine/' + id);
  }

  getAllPriceType(): Observable<PriceType[]>{
    return this.http.get<PriceType[]>(this.baseUrl + '/GetAllPriceType');
  }

  getAllItemPriceGroup(): Observable<ItemPriceGroupListModel[]>{
    return this.http.get<ItemPriceGroupListModel[]>(this.baseUrl + '/GetAllItemPriceGroup');
  }

  getForBuyMilk(): Observable<ItemListModel[]>{
    return this.http.get<ItemListModel[]>(this.baseUrl + '/GetForBuyMilk');
  }

  getForSaleFood(): Observable<ItemListModel[]>{
    return this.http.get<ItemListModel[]>(this.baseUrl + '/GetForSaleFood');
  }

  getByItemPriceGroupId(itemId: number, itemPriceGroupId: number): Observable<ItemPriceListModel>{
    return this.http.get<ItemPriceListModel>(this.baseUrl + '/GetByItemPriceGroupId/' + itemId + '/' + itemPriceGroupId);
  }

  getAllBuyMilkList(): Observable<BuyMilkListModel[]>{
    return this.http.get<BuyMilkListModel[]>(this.baseUrl + '/GetAllBuyMilkList');
  }

  getAllBuyMilkListFilter(data): Observable<any>{
    return this.http.post<any>(this.baseUrl + '/GetAllBuyMilkListFilter',data);
  }

  getAllBuyMilkDetail(id: number): Observable<BuyMilkDetailModel[]>{
    return this.http.get<BuyMilkDetailModel[]>(this.baseUrl + '/GetAllBuyMilkDetails/' + id);
  }

  getAllSaleFoodList(): Observable<SaleFoodListModel[]>{
    return this.http.get<SaleFoodListModel[]>(this.baseUrl + '/GetAllSaleFoodList');
  }

  getAllSaleFoodListFilter(data): Observable<any>{
    return this.http.post<any[]>(this.baseUrl + '/GetAllSaleFoodListFilter', data);
  }

  getAllSaleFoodDetail(id: number): Observable<SaleFoodDetailModel[]>{
    return this.http.get<SaleFoodDetailModel[]>(this.baseUrl + '/GetAllSaleFoodDetails/' + id);
  }
}
