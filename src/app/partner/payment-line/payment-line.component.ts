import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartnerListModel } from 'src/models/partner/partnerListModel';
import { PartnerService } from 'src/services/partner.service';

@Component({
  selector: 'app-payment-line',
  templateUrl: './payment-line.component.html',
  styleUrls: ['./payment-line.component.css']
})
export class PaymentLineComponent implements OnInit {
  id = this.actRoute.snapshot.params.id;
  partner: PartnerListModel;

  constructor(
    private readonly partnerService: PartnerService,
    private readonly actRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getPartner();
  }

  getPartner(){
    this.partnerService.getByIdWithAreaAndVillage(this.id).subscribe(data => {
      this.partner = data;
    });
  }

}
