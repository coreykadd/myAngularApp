import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
        return this.http.get(`${environment.api_url}${path}`, { params, headers: { 'Content-Type': 'application/json' } })
            .pipe(catchError(this.formatErrors));
    }

    post(path: string, body: object): Observable<any> {
        return this.http.post(`${environment.api_url}${path}`, JSON.stringify(body), { headers: { 'Content-Type': 'application/json' } })
            .pipe(catchError(this.formatErrors));
    }

    put(path: string, body: object): Observable<any> {
        return this.http.put(`${environment.api_url}${path}`, JSON.stringify(body), { headers: { 'Content-Type': 'application/json' } })
            .pipe(catchError(this.formatErrors));
    }

    delete(path: string): Observable<any> {
        return this.http.delete(`${environment.api_url}${path}`, { headers: { 'Content-Type': 'application/json' } })
            .pipe(catchError(this.formatErrors));
    }

    getPdf(path: string): Observable<any> {
        return this.http.get(`${environment.api_url}${path}`, { responseType: 'blob' })
            .pipe(catchError(this.formatErrors));
    }

    private formatErrors(error: any) {
        console.log('>>>>>>> err');
        return throwError(error);
    }
}
