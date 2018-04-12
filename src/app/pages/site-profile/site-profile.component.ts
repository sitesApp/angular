import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';
import { Coupon } from '../../models/coupon';

@Component({
  selector: 'app-site-profile',
  templateUrl: './site-profile.component.html',
  styleUrls: ['./site-profile.component.css']
})
export class SiteProfileComponent implements OnInit {

  private currentUser: User;
  private listCoupons: Coupon[];

  constructor(public usersService: UsersService) { }

  ngOnInit() {
        window.scroll(0,0)
    var data = sessionStorage.getItem("siteName");
    this.usersService.getSite(data).subscribe(usersResponse=>{
       this.currentUser = usersResponse;
    })

    var data1 = sessionStorage.getItem("siteUsername");
    this.usersService.getCouponsByUsernameSite(data1).subscribe(usersResponse=>{
       this.listCoupons = usersResponse;
    })




  }

}
