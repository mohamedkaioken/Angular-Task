import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { YoutubeService } from '../../Services/youtube-api.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  videosList: any;
  sortTitle = null;
  sortDate = null;
  filteredData:any;
  constructor(private ytService: YoutubeService, private http: HttpClient,private router: Router) {}

  ngOnInit(): void {
    this.getVideosList('netflix%20action%20trailers');
  }
  getVideosList(title) {
    this.ytService.getList(title).subscribe((res) => {
      this.videosList = res['items'];
      this.filteredData = res['items'];
      console.log(this.videosList);
    });
  }
  getDate(time) {
    return new Date(time).toLocaleDateString();
  }
  sortArr(arr, val) {
    if (val == 1 && this.sortTitle == null) {
      arr.sort(function (a, b) {
        if (a.snippet.title > b.snippet.title) {
          return -1;
        }
        if (b.snippet.title > a.snippet.title) {
          return 1;
        }
        return 0;
      });
    }
    else if (val == 1 && this.sortTitle != null) {
      arr.sort(function (a, b) {
        if (b.snippet.title > a.snippet.title) {
          return -1;
        }
        if (a.snippet.title > b.snippet.title) {
          return 1;
        }
        return 0;
      });
    }
    // else if(val == 1 )
    // {
    //   arr.sort(function(a, b){return a.alarmCounts-b.alarmCounts});
    // }
    else if(val == 2&& this.sortDate !=null)
    {
      arr.sort(function (a, b) {
        if (b.snippet.publishedAt > a.snippet.publishedAt) {
          return -1;
        }
        if (a.snippet.publishedAt > b.snippet.publishedAt) {
          return 1;
        }
        return 0;
      });
    }
    else if(val == 2&& this.sortDate ==null)
    {
      arr.sort(function (a, b) {
        if (a.snippet.publishedAt > b.snippet.publishedAt) {
          return -1;
        }
        if (b.snippet.publishedAt> a.snippet.publishedAt) {
          return 1;
        }
        return 0;
      });
    }
  }
  searchfilter(e) {
    console.log(typeof e);
    if (typeof e == 'object') {
      if (e.target.value.length > 0) {
        this.videosList = this.videosList.filter((x) =>
          x.snippet.title.toLowerCase().includes(e.target.value.toLowerCase())
        );
      } else {
        this.videosList = this.filteredData;
      }
    } else if (typeof e == 'string') {
      if (e.length > 0) {
        this.videosList = this.videosList.filter((x) =>
          x.snippet.title.toLowerCase().includes(e.toLowerCase())
        );
      } else {
        this.videosList = this.filteredData;
      }
      return this.videosList;
    }
  }
  redirect(id) {
    this.router.navigate(['../details/'+id]);
  }
}
