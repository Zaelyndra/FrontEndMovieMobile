import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApplicationSettings } from '@nativescript/core';

@Injectable()
export class RatingService {

  httpHeaders = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  addRating(user_id: number, movie_id: number, rating: number): Observable<any> {
    const body = {
      user: user_id,
      movie: movie_id,
      stars: rating,
    };
    return this.http.post(this.baseUrl + 'api/movies/'+body.movie+'/rate_movie/', body, this.getAuthHeaders());
  }

  private getAuthHeaders() {
    const token = ApplicationSettings.getString('token');
    const httpHeaders = new HttpHeaders(
      {'Content-Type': 'application/json; charset=utf-8',
      'Authorization': 'Token ' + token});
    return { headers: httpHeaders};
  }

}
