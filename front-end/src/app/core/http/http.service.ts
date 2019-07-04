import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }

  cachedRequests: Array<HttpRequest<any>> = [];

  public get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.api_url}${path}`, {
      params
    })
      .pipe(catchError(this.formatErrors));
  }

  public post(path: string, body: any): Observable<any> {
    return this.http.post(`${environment.api_url}${path}`, body)
      .pipe(catchError(this.formatErrors));
  }

  public put(path: string, body: any): Observable<any> {
    return this.http.put(`${environment.api_url}${path}`, JSON.stringify(body),
      { headers: { 'Content-Type': 'application/json' } })
      .pipe(catchError(this.formatErrors));
  }

  public delete(path): Observable<any> {
    return this.http.delete(`${environment.api_url}${path}`).pipe(catchError(this.formatErrors));
  }

  private formatErrors(error: any) {
    return throwError(error);
  }
}
