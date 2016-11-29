import {Component, OnInit} from '@angular/core';
import {DataService} from "../../shared/data.service";
import {User} from "../../shared/user";

@Component({
    selector: 'app-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

    user: User[];

    constructor(private _dataService: DataService) {
    }

    ngOnInit() {
        this._dataService.getUserData()
            .subscribe(
                user => this.user = user,
                error => console.log(error)
            );
    }

}
