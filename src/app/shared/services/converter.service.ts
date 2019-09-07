import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {Video} from '../models/video.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {
  video: Video;

  constructor(private http: HttpClient) {}

  convertFile(formData: FormData): Observable<Video> {
    return this.http.post<Video>(`${environment.converter.file}`, formData).pipe(
      tap((video: Video) => {this.log(`file=${video}`); console.log(video); }),
      catchError(this.handleError<any>('convertVideo'))
    );
  }

  convertFileURL(url: string): Observable<any> {
    this.video = new Video(null, null, url);
    return this.http.post<Video>(`${environment.converter.url}`, this.video).pipe(
      tap((file: any) => this.log(`file=${file}`)),
      catchError(this.handleError<any>('convertVideo'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }

}
