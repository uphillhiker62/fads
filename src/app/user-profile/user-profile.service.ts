import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class UserProfileService {

  constructor(private http: HttpClient) { }

  getUsers() : Observable<any> {
    return this.http.get("https://my.api.mockaroo.com/user.json?key=259f1a90");
  }
}
