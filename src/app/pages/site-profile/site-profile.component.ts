import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-site-profile',
  templateUrl: './site-profile.component.html',
  styleUrls: ['./site-profile.component.css']
})
export class SiteProfileComponent implements OnInit {

  private currentUser: User;

  constructor(public usersService: UsersService) { }

  ngOnInit() {
    var data = sessionStorage.getItem("siteName");
    this.usersService.getSite(data).subscribe(usersResponse=>{
       this.currentUser = usersResponse;
    })
  }

}
