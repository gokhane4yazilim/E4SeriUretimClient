import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemLineListModel } from 'src/models/item-line/itemLineListModel';
import { PartnerListModel } from 'src/models/partner/partnerListModel';
import { PartnerService } from 'src/services/partner.service';

@Component({
  selector: 'app-list-partner-line',
  templateUrl: './list-partner-line.component.html',
  styleUrls: ['./list-partner-line.component.css']
})
export class ListPartnerLineComponent implements OnInit {

  id = this.actRoute.snapshot.params.id;
  partner: PartnerListModel;
  itemLines: ItemLineListModel[];

  constructor(
    private readonly partnerService: PartnerService,
    private readonly actRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getPartner();
    this.listItemLine();
  }

  getPartner(){
    this.partnerService.getByIdWithAreaAndVillage(this.id).subscribe(data => {
      this.partner = data;
    });
  }

  listItemLine(){
    this.partnerService.getPartnerLines(this.id).subscribe(data => {
      this.itemLines = data;
    });
  }

}
