import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemPriceListModel } from 'src/models/item-price/itemPriceListModel';
import { ItemListModel } from 'src/models/item/itemListModel';
import { ItemService } from 'src/services/item.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-item-price',
  templateUrl: './list-item-price.component.html',
  styleUrls: ['./list-item-price.component.css']
})
export class ListItemPriceComponent implements OnInit {

  id = this.actRouter.snapshot.params.id;
  itemPrices: ItemPriceListModel[];
  item: ItemListModel;
  page = 1;
  count = 0;
  tableSize = 5;
  filterTerm: string;

  constructor(
    private readonly itemService: ItemService,
    private readonly actRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.listItemPrices();
    this.getItem();
  }

  listItemPrices(){
    this.itemService.getAllItemPrice(this.id).subscribe(data => {
      this.itemPrices = data;
    });
  }

  onTableDataChange(event){
    this.page = event;
    this.listItemPrices();
  }

  getItem(){
    this.itemService.getById(this.id).subscribe(data => {
      this.item = data;
    });
  }

  delete(id: number){
    Swal.fire({
      title: 'UYARI!',
      text: 'Silme işlemini onaylıyor musunuz?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Evet, onaylıyorum',
      cancelButtonText: 'Hayır, vazgeç'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Başarılı!',
          'Veri silindi',
          'success'
        );
        this.itemService.delete(id).subscribe(data => {
          window.location.reload();
        });       
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'İptal',
          'İşlem iptal edildi',
          'error'
        );
      }
    });
  }

}
