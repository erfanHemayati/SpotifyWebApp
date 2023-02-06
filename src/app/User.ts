import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
  })
export default class User{
    _id: string = "";
    userName: string = "";
    password: string = "";
}
