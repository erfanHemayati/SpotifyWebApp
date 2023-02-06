import { Component, OnDestroy, OnInit } from '@angular/core';

import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit, OnDestroy {
  favourites: Array<any> = [];
  tracks: any;
  sub: any;
  tmp: any;
  constructor(public spotify: MusicDataService) { }

  removeFavorite(id: any) {
    this.tmp = this.spotify.removeFromFavourites(id).subscribe(bebel=>this.tracks = bebel.tracks );//Here becuse the value of tracks changes, the component rerender    
  }

  ngOnInit(): void {
    this.sub = this.spotify.getFavourites().subscribe(data => {
      this.tracks = data.tracks
    });
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.tmp?.unsubscribe();
  }
}
