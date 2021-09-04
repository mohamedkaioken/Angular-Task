import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  constructor(private http: HttpClient) {}

  getList(title) {
    return this.http
      .get(environment.sourceURL + '/search?part=snippet&maxResults=10&q='+title+'&key=AIzaSyA9GG8qOHif0Cyo7S87DTPEwjC9y-5k9k4')
      .pipe(catchError(this.handleError));
  }
  getVideo(id) {
    return this.http
      .get(environment.sourceURL + '/videos?part=snippet%2CcontentDetails%2Cstatistics&id='+id+'&regionCode=US&key=AIzaSyA9GG8qOHif0Cyo7S87DTPEwjC9y-5k9k4')
      .pipe(catchError(this.handleError));
  }
 

  handleError(err: HttpErrorResponse) {
    console.log(err);
    return throwError(err.status || 'Server Error');
  }
}