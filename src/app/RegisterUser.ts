import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
  })
export default class RegisterUser {
    userName: string = "";
    password: string = "";
    password2: string = "";
}
