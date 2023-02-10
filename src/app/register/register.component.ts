import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import RegisterUser from '../RegisterUser';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public warning: any = "";
  public success: any = false;
  public loading: any = false;

  constructor(private auth: AuthService, public ru: RegisterUser) { }

  ngOnInit(): void {
    this.ru.userName = "";
    this.ru.password = "";
    this.ru.password2 = "";
  }

  onSubmit() {

    if (this.ru.userName != "" && this.ru.password != "" && this.ru.password2 != "") {
      this.loading = true;
      this.auth.register(this.ru).subscribe(data => {
        console.log(data);
        this.success = true;
        this.warning = "";
        this.loading = false;
      },
        err => {
          this.success = false;
          this.warning = err.error.message;
          this.loading = false;
        }
      );
    }

  }
}
