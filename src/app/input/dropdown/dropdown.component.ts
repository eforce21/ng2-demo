import {Component, OnInit} from '@angular/core';
import {Option} from "./option";
import {ZNameContainer} from "./zname-container";

@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

    zNameContainers: ZNameContainer[] = [];

    constructor() {
    }

    ngOnInit() {
        let options: Option[] = [];
        options.push(
            {name: 'Rule 1', value: 1},
            {name: 'Rule 2', value: 2},
            {name: 'Rule 3', value: 3},
            {name: 'Rule 4', value: 4}
        );

        this.zNameContainers.push({
            zName: 'Z1',
            selectedOption: null,
            availableOptions: options
        });

        this.zNameContainers.push({
            zName: 'Z2',
            selectedOption: null,
            availableOptions: options
        });
    }

    onOptionSelect(event: any, index: number, selectedOption: Option) {
        console.log('Selected rule: ', selectedOption);
        console.log('Column: ', index);
    }
}
