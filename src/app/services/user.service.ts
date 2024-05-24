import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/iuser';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  apiUrl: string = "https://northwind.vercel.app/api/users";

  constructor(private http: HttpClient) {}

  register(product: IUser): Observable<IUser> {
    return new Observable<IUser>();
    //todo
  }
}
