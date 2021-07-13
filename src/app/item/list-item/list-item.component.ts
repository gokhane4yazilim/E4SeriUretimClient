import { Component, OnInit } from '@angular/core';
import { ItemListModel } from 'src/models/item/itemListModel';
import { ItemService } from 'src/services/item.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  items: ItemListModel[];
  page = 1;
  count = 0;
  tableSize = 5;
  filterTerm: string;

  constructor(private readonly itemService: ItemService) { }

  ngOnInit(): void {
    this.listItems();
  }

  listItems(){
    return this.itemService.getAll().subscribe(data => {
      this.items = data;
    });
  }

  onTableDataChange(event){
    this.page = event;
    this.listItems();
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
