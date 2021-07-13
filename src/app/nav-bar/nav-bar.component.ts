import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SettingListModel } from 'src/models/setting/settingListModel';
import { UserModel } from 'src/models/user/userModel';
import { AccountService } from 'src/services/account.service';
import { SettingService } from 'src/services/setting.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  currentUser$: Observable<UserModel>;
  setting: SettingListModel;
  invoiceDate = new Date();
  muhDate = new Date();

  constructor(
    private readonly accountService: AccountService,
    private readonly settingService: SettingService
    ) { }

  ngOnInit(): void {
    this.currentUser$ = this.accountService.currentUser$;
    this.getSetting();
  }

  getSetting(){
    this.settingService.getSetting().subscribe(data => {
      this.setting = data;
    });
  }

  logout(){
    this.accountService.logout();
  }

}
