import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Movie } from '../models/movie';
import { Observable } from 'rxjs';
import { ApplicationSettings } from '@nativescript/core';

@Injectable()
export class MovieService {

  httpHeaders = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getMovies(): Observable<any> {
    return this.http.get(this.baseUrl + 'api/movies/', this.getAuthHeaders());
  }
  getMovie(id: number): Observable<any> {
    return this.http.get(this.baseUrl + 'api/movies/'+id+'/', this.getAuthHeaders());
  }

  addMovie(movie): Observable<any> {
    return this.http.post(this.baseUrl + 'api/movies/', movie, this.getAuthHeaders());
  }

  editMovie(movie, id: number): Observable<any> {
    return this.http.put(this.baseUrl + 'api/movies/' + id + '/', movie, this.getAuthHeaders());
  }
  deleteMovie(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + 'api/movies/' + id + '/', this.getAuthHeaders());
  }

  private getAuthHeaders() {
    const token = ApplicationSettings.getString('token');
    const httpHeaders = new HttpHeaders(
      {'Content-Type': 'application/json; charset=utf-8',
      'Authorization': 'Token ' + token});
    return { headers: httpHeaders};
  }

}
