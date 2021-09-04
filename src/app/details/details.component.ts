import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { YoutubeService } from '../../Services/youtube-api.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  videoList:any;
videoDetails:any;
id:string;
  constructor(private ytService: YoutubeService,private _Activatedroute:ActivatedRoute, private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => {
      console.log(params);
       this.id = params.get('id');
    });
    this.ytService.getVideo(this.id).subscribe((res) => {
      this.videoList = res['items'];
      this.videoDetails = this.videoList[0];
      console.log(this.videoDetails);
    });
    this.getVideo();
  }
  getVideo() {
    
  }
  getDate(date)
  {
    return new Date(date).toDateString();
  }
}
