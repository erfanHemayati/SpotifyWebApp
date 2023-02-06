import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import user from '../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public warning: any = "";
  public success: any = false;
  public loading: any = false;

  constructor(private auth: AuthService, public u: user, private router: Router) { }

  ngOnInit(): void {
    this.u.userName = "";
    this.u.password = "";
  }

  onSubmit() {

    if (this.u.userName != "" && this.u.password != "") {
      this.loading = true;
      this.auth.login(this.u).subscribe(data => {
        console.log(data);
        this.auth.setToken(data.token);

        this.warning = "";
        this.loading = false;
        this.router.navigate(['/newReleases']);
      },
        err => {
          this.warning = err.error.message;// no idea about this
          this.loading = false;
        }
      );
    }


  }
}
