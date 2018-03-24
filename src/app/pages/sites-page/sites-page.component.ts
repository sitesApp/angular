import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-sites-page',
  templateUrl: './sites-page.component.html',
  styleUrls: ['./sites-page.component.css']
})
export class SitesPageComponent implements OnInit {

  private userslist: User[] = [];

  constructor(public usersService: UsersService){

  }

  ngOnInit() {
    var data = sessionStorage.getItem("categoryName");
    this.usersService.getSitesByCategory(data).subscribe(usersResponse=>{
       this.userslist = usersResponse;
    })
  }

  saveSite(name: string){
    sessionStorage.setItem("siteName", name);
  }

}

