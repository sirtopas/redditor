import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  public authToken: string;
  public httpOptions = {
    headers: new HttpHeaders({
    })
  };

  constructor(protected httpClient: HttpClient) { }
}
