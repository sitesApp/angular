import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-site-page',
  templateUrl: './search-site-page.component.html',
  styleUrls: ['./search-site-page.component.css']
})
export class SearchSitePageComponent implements OnInit {

  private userslist: User[] = [];

  constructor(public usersService: UsersService, public router: Router){
  }

  ngOnInit() {;
    window.scroll(0,0);
    var data = sessionStorage.getItem("searchSite");
    this.usersService.searchSite(data).subscribe(usersResponse=>{
       this.userslist = usersResponse;
    })
  }

  saveSite(name: string, username: string){
    sessionStorage.setItem("siteName", name);
    sessionStorage.setItem("siteUsername", username);
  }

}

