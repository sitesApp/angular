import { Component } from '@angular/core';

//Nuevos imports
import { Router } from '@angular/router';
import { AuthService } from './common/auth.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'app';
  public searchForm: FormGroup;

  constructor(
    public authService: AuthService,
    public router: Router
  ) {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/categorys']);
    }

    this.searchForm = new FormGroup({
        inputSearch: new FormControl()
    });
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  signOut() {
    this.authService.signOut();
    this.router.navigate(['/categorys']);
  }

  searchSite() {
    var data = this.searchForm.get('inputSearch').value;
    console.log(data);
    sessionStorage.setItem("searchSite", data);
    this.router.navigate(['/searchSite']);
  }

}
