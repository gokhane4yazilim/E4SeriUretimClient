import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuyMilkDetailModel } from 'src/models/line/buyMilkDetailModel';
import { ItemService } from 'src/services/item.service';

@Component({
  selector: 'app-detail-buy-milk',
  templateUrl: './detail-buy-milk.component.html',
  styleUrls: ['./detail-buy-milk.component.css']
})
export class DetailBuyMilkComponent implements OnInit {

  partnerId = this.actRoute.snapshot.params.id;
  lines: BuyMilkDetailModel[];

  constructor(
    private readonly itemService: ItemService,
    private readonly actRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.listLines();
  }

  listLines(){
    this.itemService.getAllBuyMilkDetail(this.partnerId).subscribe(data => {
      this.lines = data;
    });
  }

}
