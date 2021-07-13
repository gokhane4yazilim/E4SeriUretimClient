import { Component, OnInit } from '@angular/core';
import { UnitListModel } from 'src/models/unit/unitListModel';
import { UnitService } from 'src/services/unit.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-unit',
  templateUrl: './list-unit.component.html',
  styleUrls: ['./list-unit.component.css']
})
export class ListUnitComponent implements OnInit {

  units: UnitListModel[];
  page = 1;
  count = 0;
  tableSize = 5;
  filterTerm: string;

  constructor(private readonly unitService: UnitService) { }

  ngOnInit(): void {
    this.listUnit();
  }

  listUnit(){
    this.unitService.getAll().subscribe(data => {
      this.units = data;
    });
  }

  onTableDataChange(event){
    this.page = event;
    this.listUnit();
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
        this.unitService.delete(id).subscribe(data => {
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
