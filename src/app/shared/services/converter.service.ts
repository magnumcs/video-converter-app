import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {Video} from '../models/video.model';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {
  video: Video;

  constructor(private http: HttpClient) {}

  convertFile(formData: FormData): Observable<any> {
    return this.http.post<FormData>(`http://localhost:8080/converter/uploadfile`, formData).pipe(
      tap((file: any) => this.log(`file=${file}`)),
      catchError(this.handleError<any>('convertVideo'))
    );
  }

  convertFileURL(url: string): Observable<any> {
    this.video = new Video(null, null, url);
    return this.http.post<Video>(`http://localhost:8080/converter/uploadurl`, this.video).pipe(
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
