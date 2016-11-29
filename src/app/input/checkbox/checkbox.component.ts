import {Component, OnInit} from '@angular/core';
import {DataService} from "../../shared/data.service";
import {User} from "../../shared/user";

@Component({
    selector: 'app-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

    users: User[];

    constructor(private _dataService: DataService) {
    }

    ngOnInit() {
        this._dataService.getUserData()
            .subscribe(
                users => this.users = users,
                error => console.log(error)
            );
    }

    checkBoxClicked(authorization: string, userName: string) {
        this.users
            .filter(user => user.name == userName)
            .map(targetUser => {

                let currentAuth = targetUser.authorizations;
                let authIndex = currentAuth.indexOf(authorization);
                if (authIndex != -1) {
                    currentAuth.splice(authIndex, 1);
                    targetUser.authorizations = currentAuth;
                    console.log('Removed an authorization. New set of authorizations: ', targetUser.authorizations);
                    return;
                }

                currentAuth.push(authorization);
                targetUser.authorizations = currentAuth;
                console.log('Added an authorization. New set of authorizations: ', targetUser.authorizations);
            });

    }

    showAuthorizations(auths: string[]) {
        console.log('Current authorizations: ', auths);
    }
}
