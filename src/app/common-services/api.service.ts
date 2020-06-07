import { Injectable } from '@angular/core';
import { catchError, finalize, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { EnvironmentService } from './environment.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    constructor(
        private http: HttpClient,
        public envService: EnvironmentService,
        private token: TokenService
    ) { }

    get apiUrl (): string { return this.envService.apiUrl; }

    get firUrl (): string { return this.envService.firUrl; }

    get headers (): HttpHeaders {
        const headersConfig: {} = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImI2MDg4MTcxODk1YjcwMjVmZTY4Zjg5ZTBjMjM3ODY5OTdmZjc0OTgzZjBiZDNlYTQ1M2Q3NWU3MDhmOTU3Nzg1ZWE1ZmRhNmMxNDY3NjIzIn0.eyJhdWQiOiIxIiwianRpIjoiYjYwODgxNzE4OTViNzAyNWZlNjhmODllMGMyMzc4Njk5N2ZmNzQ5ODNmMGJkM2VhNDUzZDc1ZTcwOGY5NTc3ODVlYTVmZGE2YzE0Njc2MjMiLCJpYXQiOjE1ODY3NTc5NDksIm5iZiI6MTU4Njc1Nzk0OSwiZXhwIjoxNjE4MjkzOTQ5LCJzdWIiOiI4Iiwic2NvcGVzIjpbXX0.bHIfTqCaum8ocK5oSIW6efuywDoRwfjE7FwXpk8kZiD3FSzwiptkjQOt7DN8XzVQEl0Dh_aRnx_mhG3PNi0eW-mdNjzCBsSAIvL-W6PAVmEfMvTDRzsdA1Yz4MglyMGRyOgetCE8gHaxMnq8i8Rz_Wf5EZSpRu7G9kuyGSvw4P3mqGAzby90nffu8QrvaHXcuuQMNmYeCp5YcYGnLYOCgb6kkN_bN1UWTfCJDCY6Rj7qCF9UgQ7XyeRDRTKbZFO8zH24q5TO2jAKCvs5HYUGhSxnaFmuzH9NoJvvMu0WQJ_oD1E40pocLLkI4uKGIhtybwUwGe73YO_4NbKFBUuJwNNk2_ahFqwdY5UYVuNZEmX0IkH1m2cdt7KODwIkQGQXZKG-bZqbanQKlA2xlPc8BCtCY_8fAkOKuAF857AXP-6BrTTBPKfS1FYOmM18viB2O3yTi2537e2uyTUYJRhk3SDxnSkZV2hIedXkV0a5BDYjTh0zYBDe5y65kNEA04yvEAzmQq37rN4dNKyBW-pLv1voj4iDkgit8HrdbVIcy3pPi2Ffy1KTptW5pf8IWdytZ_9ueuRvuX6VzN2u3uP0QdupuLyLDRfHvzHCGYWTIhCLYBedKyQAopmGivDTPXaGz2Psq2AXNusMXellWajcCM09jEkYizoa1ULnJKOzxJU'
        };
        return new HttpHeaders( headersConfig );
    }

    get uploadHeaders (): HttpHeaders {
        const headersConfig: {} = {
            Authorization: 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImI2MDg4MTcxODk1YjcwMjVmZTY4Zjg5ZTBjMjM3ODY5OTdmZjc0OTgzZjBiZDNlYTQ1M2Q3NWU3MDhmOTU3Nzg1ZWE1ZmRhNmMxNDY3NjIzIn0.eyJhdWQiOiIxIiwianRpIjoiYjYwODgxNzE4OTViNzAyNWZlNjhmODllMGMyMzc4Njk5N2ZmNzQ5ODNmMGJkM2VhNDUzZDc1ZTcwOGY5NTc3ODVlYTVmZGE2YzE0Njc2MjMiLCJpYXQiOjE1ODY3NTc5NDksIm5iZiI6MTU4Njc1Nzk0OSwiZXhwIjoxNjE4MjkzOTQ5LCJzdWIiOiI4Iiwic2NvcGVzIjpbXX0.bHIfTqCaum8ocK5oSIW6efuywDoRwfjE7FwXpk8kZiD3FSzwiptkjQOt7DN8XzVQEl0Dh_aRnx_mhG3PNi0eW-mdNjzCBsSAIvL-W6PAVmEfMvTDRzsdA1Yz4MglyMGRyOgetCE8gHaxMnq8i8Rz_Wf5EZSpRu7G9kuyGSvw4P3mqGAzby90nffu8QrvaHXcuuQMNmYeCp5YcYGnLYOCgb6kkN_bN1UWTfCJDCY6Rj7qCF9UgQ7XyeRDRTKbZFO8zH24q5TO2jAKCvs5HYUGhSxnaFmuzH9NoJvvMu0WQJ_oD1E40pocLLkI4uKGIhtybwUwGe73YO_4NbKFBUuJwNNk2_ahFqwdY5UYVuNZEmX0IkH1m2cdt7KODwIkQGQXZKG-bZqbanQKlA2xlPc8BCtCY_8fAkOKuAF857AXP-6BrTTBPKfS1FYOmM18viB2O3yTi2537e2uyTUYJRhk3SDxnSkZV2hIedXkV0a5BDYjTh0zYBDe5y65kNEA04yvEAzmQq37rN4dNKyBW-pLv1voj4iDkgit8HrdbVIcy3pPi2Ffy1KTptW5pf8IWdytZ_9ueuRvuX6VzN2u3uP0QdupuLyLDRfHvzHCGYWTIhCLYBedKyQAopmGivDTPXaGz2Psq2AXNusMXellWajcCM09jEkYizoa1ULnJKOzxJU'
        };

        return new HttpHeaders( headersConfig );
    }

    get ( path: string, params: HttpParams = new HttpParams() ): Observable<any> {
        return this.http.get( `${ this.apiUrl }${ path }`, { headers: this.headers, params });
    }

    put ( path: string, body: Object = {},    ): Observable<any> {
        return this.http.put( `${ this.apiUrl }${ path }`, JSON.stringify( body ), { headers: this.headers });
    }

    post ( path: string, body: Object = {}, params: HttpParams = new HttpParams() ): Observable<any> {
        return this.http.post( `${ this.apiUrl }${ path }`, JSON.stringify( body ), { headers: this.headers, params });
    }

    delete ( path, params: HttpParams =  new HttpParams() ): Observable<any> {
        return this.http.delete( `${ this.apiUrl }${ path }`, { headers: this.headers, params });
    }
}
