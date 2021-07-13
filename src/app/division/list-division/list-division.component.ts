import { Component, OnInit } from '@angular/core';
import { DivisionListDto } from 'src/models/division/divisionListDto';
import { DivisionService } from 'src/services/division.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-division',
  templateUrl: './list-division.component.html',
  styleUrls: ['./list-division.component.css']
})
export class ListDivisionComponent implements OnInit {

  divisions: DivisionListDto[];
  page = 1;
  count = 0;
  tableSize = 5;
  filterTerm: string;

  constructor(private readonly divisionService: DivisionService) { }

  ngOnInit(): void {
    this.listDivision();
  }

  listDivision(){
    this.divisionService.getAll().subscribe(data => {
      this.divisions = data;
    });
  }

  onTableDataChange(event){
    this.page = event;
    this.listDivision();
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
        this.divisionService.delete(id).subscribe(data => {
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
