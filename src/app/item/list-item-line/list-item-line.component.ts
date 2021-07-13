import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemLineListModel } from 'src/models/item-line/itemLineListModel';
import { ItemListModel } from 'src/models/item/itemListModel';
import { ItemService } from 'src/services/item.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-item-line',
  templateUrl: './list-item-line.component.html',
  styleUrls: ['./list-item-line.component.css']
})
export class ListItemLineComponent implements OnInit {

  id = this.actRouter.snapshot.params.id;
  itemLines: ItemLineListModel[];
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
    this.listItemLines();
    this.getItem();
  }

  listItemLines(){
    this.itemService.getAllItemLines(this.id).subscribe(data => {
      this.itemLines = data;
    });
  }

  onTableDataChange(event){
    this.page = event;
    this.listItemLines();
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
