import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'app-search-result-component',
  templateUrl: './search-result-component.component.html',
  styleUrls: ['./search-result-component.component.css']
})
export class SearchResultComponentComponent implements OnInit, OnDestroy {
  public results: any;
  public searchQuery: string = "";
  private sub: any;
  constructor(private route: ActivatedRoute, private spotify: MusicDataService) { }

  ngOnInit(): void {
    this.sub = this.route.queryParams.subscribe(params => {
      this.searchQuery = params['q'] || "";
      this.spotify.searchArtists(this.searchQuery).subscribe(data => {
        this.results = data.artists.items.filter(token => {
          return token.images.length > 0;
        })
      });

    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
