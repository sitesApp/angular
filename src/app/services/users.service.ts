import { Injectable } from '@angular/core';

//Importaciones nuevas
import { Http } from '@angular/http';
import { APIService } from '.././common/api.service';
import { AppConfiguration } from '.././common/config/app-configuration.service';
import { AuthService } from '.././common/auth.service';

@Injectable()
export class UsersService extends APIService {
constructor(
    public config: AppConfiguration,
    public authService: AuthService,
    public http: Http
  ) {
    super(config, authService, http);
  }

  login(username: string, password: string) {
    return this.post('user/login', { username, password }, { credentials: false }).map(loginResponse => {
      if (loginResponse) {
        this.authService.accessToken = loginResponse.accessToken;
      }
    });
  }
}