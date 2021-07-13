import { Component, OnInit } from '@angular/core';
import { PartnerListModel } from 'src/models/partner/partnerListModel';
import { PartnerService } from 'src/services/partner.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-partner',
  templateUrl: './list-partner.component.html',
  styleUrls: ['./list-partner.component.css']
})
export class ListPartnerComponent implements OnInit {
  
  partners: PartnerListModel[];
  page = 1;
  count = 0;
  tableSize = 5;
  filterTerm: string;

  constructor(
    private readonly partnerService: PartnerService
  ) { }

  ngOnInit(): void {
    this.listPartner();
  }

  listPartner() {
     this.partnerService.getAll().subscribe(data => {
       this.partners = data;
     });
  }

  onTableDataChange(event){
    this.page = event;
    this.listPartner();
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
        this.partnerService.delete(id).subscribe(() => {
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
