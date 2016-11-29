import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class HttpService {

    constructor(private _http: Http) {
    }

    doGet(url: string): Observable<Response> {
        return this._http.get(url);
    }
}
