import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export default class Service {
    private http: HttpClient;
    constructor(http: HttpClient) {
        this.http = http;
    }

    get(uri): Observable<any> {
        return this.http.get(uri)
            .pipe(
                catchError(this.handleError)
                );
    }

    post(uri, body: string): Promise<any> {
        const headers = new HttpHeaders({ 'Content-Type':  'application/json'});
        return this.http.post(uri, body, { headers: headers }).toPromise();
    }

    private handleError(error: Response): Observable<Object> {
        console.error(error);
        return Observable.throw(error.json()['error'] || 'Server error');
    }
}
