import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PartnerListModel } from 'src/models/partner/partnerListModel';
import { PartnerService } from 'src/services/partner.service';

@Component({
  selector: 'app-payment-cash',
  templateUrl: './payment-cash.component.html',
  styleUrls: ['./payment-cash.component.css']
})
export class PaymentCashComponent implements OnInit {
  addForm:FormGroup;
  partnerId = this.actRoute.snapshot.params.id;
  partner: PartnerListModel;

  constructor(
    private readonly partnerService: PartnerService,
    private readonly actRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getPartner();
  }

  getPartner() {
    this.partnerService.getByIdWithAreaAndVillage(this.partnerId).subscribe(data => {
      this.partner = data;
    });
  }

  submitForm(){

  }

}
