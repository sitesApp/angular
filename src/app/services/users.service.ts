import{Injectable}from'@angular/core';

//Importaciones nuevas
import {Http}from '@angular/http';
import {APIService}from '.././common/api.service';
import {AppConfiguration}from '.././common/config/app-configuration.service';
import {AuthService}from '.././common/auth.service';
import {User} from '.././models/user';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UsersService extends APIService {

private resourceUrl: string = 'user/';

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

  getSites(): Observable<User[]> {
    return this.get(this.resourceUrl+"getAll");
  }

  getSitesByCategory(category): Observable<User[]> {
    return this.get(this.resourceUrl+"byCategory/"+category);
  }

  getSite(siteName): Observable<User> {
    return this.get(this.resourceUrl+"getsite/"+siteName)
  }



}