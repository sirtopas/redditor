import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Token } from '../model/token';

@Injectable({
    providedIn: 'root'
})
export class RedditService extends BaseService {

    constructor(protected httpClient: HttpClient) {
        super(httpClient);
    }

    getMe(token: Token): Observable<any> {
        console.log(token.access_token);

        this.httpOptions.headers = this.httpOptions.headers.append('Authorization', 'bearer ' + token.access_token);
        return this.httpClient.get<any>('https://oauth.reddit.com/api/v1/me', this.httpOptions);
    }
}
