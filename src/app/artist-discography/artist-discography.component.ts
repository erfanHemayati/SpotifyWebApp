import { Component, OnInit } from '@angular/core';
import { MusicDataService } from '../music-data.service';
import { Subscription } from 'rxjs';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-artist-discography',
  templateUrl: './artist-discography.component.html',
  styleUrls: ['./artist-discography.component.css']
})
export class ArtistDiscographyComponent implements OnInit {
  constructor(private route: ActivatedRoute, private spotify: MusicDataService) { }
  public artist: any;
  public albums: any;
  private artistSub: Subscription | undefined;
  private albumSub: Subscription | undefined;

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];

    this.artistSub = this.spotify.getArtistById(id).subscribe(data => this.artist = data)
    this.albumSub = this.spotify.getAlbulmsByArtisId(id).subscribe(data => this.albums = data.items)
  }

  ngOnDestroy(): void {
    this.artistSub?.unsubscribe();
    this.albumSub?.unsubscribe();
  }

}
