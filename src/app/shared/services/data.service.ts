import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl: string = 'https://jsonplaceholder.typicode.com/todos/1';

  constructor(private httpClient: HttpClient) {}

  public getData(): Observable<any> {
    // let params: any = {};
    // params = Object.assign(JSON.parse(JSON.stringify(client)), {'page': page, 'size': size})

    // return this.httpClient.get(this.apiUrl, {params: params});

    return this.httpClient.get(this.apiUrl);
    // return of(5);
  }
}
