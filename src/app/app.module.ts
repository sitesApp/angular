import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { FormGroup, FormBuilder,FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { SitesPageComponent } from './pages/sites-page/sites-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Nuevos imports
import { AppConfiguration } from './common/config/app-configuration.service';
import { INITIAL_CONFIG } from './common/config/initial-config';
import { HttpModule } from '@angular/http';
import { APIService } from './common/api.service';
import { AuthService } from './common/auth.service';
import { AppDataService } from './common/app-data.service';
import { SignInPageComponent } from './pages/sign-in/sign-in-page.component';
import { UsersService } from './services/users.service';
import { CategoryService } from './services/category.service';





const ROUTES = [
{ path: 'signin', component: SignInPageComponent },
{ path: 'categorys', component: CategoryPageComponent },
{ path: 'sites', component: SitesPageComponent },
{path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SitesPageComponent,
    PageNotFoundComponent,
    SignInPageComponent,
    CategoryPageComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: INITIAL_CONFIG,
      useValue: {
        apiURL: 'http://localhost:8080'
      }
    },
    AppConfiguration,
    APIService,
    AuthService,
    AppDataService,
    UsersService,
    CategoryService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
