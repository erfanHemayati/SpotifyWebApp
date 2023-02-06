import { coerceNumberProperty } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private auth: AuthService) { }

  public searchString: string = "";
  public token: any;
  title = 'web422-a4';

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.token = this.auth.readToken();; 

      }
    })
  }

  logout() { 
    console.log("bebl")
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  handleSearch() {
    console.log(this.searchString)
    this.router.navigate(['/search'], { queryParams: { q: this.searchString } });
  }

}
