import { Component, OnInit } from '@angular/core';
import { VillageListModel } from 'src/models/village/villageListModel';
import { VillageService } from 'src/services/village.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-village',
  templateUrl: './list-village.component.html',
  styleUrls: ['./list-village.component.css']
})
export class ListVillageComponent implements OnInit {

  villages: VillageListModel[];
  page = 1;
  count = 0;
  tableSize = 5;
  filterTerm: string;

  constructor(private readonly villageService: VillageService) { }

  ngOnInit(): void {
    this.listVillage();
  }

  listVillage(){
    this.villageService.getAll().subscribe(data => {
      this.villages = data;
    });
  }

  onTableDataChange(event){
    this.page = event;
    this.listVillage();
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
        this.villageService.delete(id).subscribe(data => {
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
