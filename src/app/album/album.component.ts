import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MusicDataService } from "../music-data.service"
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  constructor(private spotify: MusicDataService, private route: ActivatedRoute, private _snackbar: MatSnackBar) { };
  public album: any;
  private albumSub: Subscription | undefined;
  addFavorite(id: any) {
    this.spotify.addToFavourites(id).subscribe(data => {
      let snackBarRef = this._snackbar.open('Adding to Favourites...', 'Done', {
        duration: 1500
      });
    },
      err => {
        console.log(err)
        let snackBarRef = this._snackbar.open('Adding to Favourites was NOT successful', 'Done', {
          duration: 1500
        });
      }

    )
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.albumSub = this.spotify.getAlbumById(id).subscribe(data => this.album = data);
    //this.album = albumData;
  }

}
