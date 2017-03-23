import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class LocationService {
    private baseUrl: string;
    constructor(private http: Http) { 
        this.baseUrl = "http://services.groupkt.com/state/get/IND/";
    }

    getLocationDetails(stateCode:string | any): Observable<any> {
        if (typeof stateCode == "undefined") {
            stateCode = "all";
        }
        return this.http
            .get(this.baseUrl + stateCode)
            .map((r: Response) => r.json().RestResponse.result )
            .catch((error: any) => {
                console.error('An friendly error occurred', error);
                return Observable.throw(error.message || error);
            });
    }
}
