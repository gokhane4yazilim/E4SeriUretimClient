import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SaleFoodDetailModel } from 'src/models/line/saleFoodDetailModel';
import { ItemService } from 'src/services/item.service';

@Component({
  selector: 'app-detail-sale-food',
  templateUrl: './detail-sale-food.component.html',
  styleUrls: ['./detail-sale-food.component.css']
})
export class DetailSaleFoodComponent implements OnInit {

  partnerId = this.actRoute.snapshot.params.id;
  lines: SaleFoodDetailModel[];

  constructor(
    private readonly itemService: ItemService,
    private readonly actRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.listLines();
  }

  listLines(){
    this.itemService.getAllSaleFoodDetail(this.partnerId).subscribe(data => {
      this.lines = data;
    });
  }
}
