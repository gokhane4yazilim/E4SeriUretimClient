import { Component, OnInit } from '@angular/core';
import { AreaListModel } from 'src/models/area/areaListModel';
import { AreaService } from 'src/services/area.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-area',
  templateUrl: './list-area.component.html',
  styleUrls: ['./list-area.component.css']
})
export class ListAreaComponent implements OnInit {

  areas: AreaListModel[];
  page = 1;
  count = 0;
  tableSize = 5;
  filterTerm: string;

  constructor(private readonly areaService: AreaService) { }

  ngOnInit(): void {
    this.listArea();
  }

  listArea(){
    this.areaService.getAll().subscribe(data => {
      this.areas = data;
    });
  }

  onTableDataChange(event){
    this.page = event;
    this.listArea();
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
        this.areaService.delete(id).subscribe(data => {
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
