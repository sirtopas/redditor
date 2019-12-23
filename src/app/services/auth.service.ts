import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Token } from '../model/token';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
    providedIn: 'root'
})
export class AuthService extends BaseService {

    constructor(protected httpClient: HttpClient) {
        super(httpClient);
    }

    public redirect() {
        window.location.href = environment.redditAuthUrl;
    }

    public getAuthToken(code: string, uri: string): Observable<Token> {
        const authString = btoa('');
        this.httpOptions.headers = this.httpOptions.headers.append('Authorization', 'Basic ' + authString);
        this.httpOptions.headers = this.httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        const postString = 'grant_type=' + 'authorization_code&' + 'code=' + code + '&redirect_uri=http://localhost:4200';

        return this.httpClient.post<Token>(environment.redditApiUrl + 'access_token', postString, this.httpOptions);
    }
}
