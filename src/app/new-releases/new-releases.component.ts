import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MusicDataService } from "../music-data.service"

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.css']
})
export class NewReleasesComponent implements OnInit {


  public releases: any; //This will hold a dummy post
  private dataSub: Subscription | undefined; 


  constructor(private spotify: MusicDataService) { };
  ngOnInit(): void {
    this.dataSub = this.spotify.getNewReleases().subscribe(data => this.releases = data.albums.items)

  }


  ngOnDestroy(): void {
    this.dataSub?.unsubscribe();
  }
}
