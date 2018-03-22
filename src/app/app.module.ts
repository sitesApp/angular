import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { FormGroup, FormBuilder,FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

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



const ROUTES = [
{ path: 'signin', component: SignInPageComponent },
{ path: 'home', component: HomePageComponent },
{path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PageNotFoundComponent,
    SignInPageComponent
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
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
