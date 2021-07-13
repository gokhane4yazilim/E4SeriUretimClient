import { Component, OnInit } from '@angular/core';
import { ItemPriceGroupListModel } from 'src/models/item-price-group/itemPriceGroupListModel';
import { ItemPriceGroupService } from 'src/services/item-price-group.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-item-price-group',
  templateUrl: './list-item-price-group.component.html',
  styleUrls: ['./list-item-price-group.component.css']
})
export class ListItemPriceGroupComponent implements OnInit {

  itemPriceGroups: ItemPriceGroupListModel[];
  page = 1;
  count = 0;
  tableSize = 5;
  filterTerm: string;

  constructor(private readonly service: ItemPriceGroupService) { }

  ngOnInit(): void {
    this.listItemPriceGroup();
  }

  listItemPriceGroup(){
    this.service.getAll().subscribe(data => {
      this.itemPriceGroups = data;
    });
  }

  onTableDataChange(event){
    this.page = event;
    this.listItemPriceGroup();
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
        this.service.delete(id).subscribe(data => {
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
