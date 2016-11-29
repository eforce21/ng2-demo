import {Injectable} from "@angular/core";
import {HttpService} from "./http.service";
import {Observable} from "rxjs";
import {User} from "./user";
import "rxjs";

@Injectable()
export class DataService {

    private _userDataUrl: string = 'assets/data/user-data.json';

    constructor(private _httpService: HttpService) {
    }

    getUserData(): Observable<User[]> {
        return this._httpService.doGet(this._userDataUrl)
            .map(response => <User[]> response.json());
    }
}
