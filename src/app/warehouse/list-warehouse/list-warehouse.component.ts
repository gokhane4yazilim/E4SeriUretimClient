import { Component, OnInit } from '@angular/core';
import { WarehouseListDto } from 'src/models/warehouse/warehouseListDto';
import { WarehouseService } from 'src/services/warehouse.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-warehouse',
  templateUrl: './list-warehouse.component.html',
  styleUrls: ['./list-warehouse.component.css']
})
export class ListWarehouseComponent implements OnInit {

  warehouses: WarehouseListDto[];
  page = 1;
  count = 0;
  tableSize = 5;
  filterTerm: string;

  constructor(private readonly warehouseService: WarehouseService) { }

  ngOnInit(): void {
    this.listWarehouse();
  }

  listWarehouse(){
    this.warehouseService.getAll().subscribe(data => {
      this.warehouses = data;
    });
  }

  onTableDataChange(event){
    this.page = event;
    this.listWarehouse();
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
        this.warehouseService.delete(id).subscribe(data => {
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
