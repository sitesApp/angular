import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  private userslist: User[] = [];

  constructor(public usersService: UsersService){

  }

  ngOnInit() {
    console.log("llego a onInit");
    this.usersService.getSites().subscribe(usersResponse=>{
       this.userslist = usersResponse;
    })
  }

  saveSite(name: string){
    sessionStorage.setItem("siteName", name);
  }

}

