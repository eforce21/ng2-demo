import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {InputListComponent} from "./input-list/input-list.component";
import {InputComponent} from "./input.component";
import {CheckboxComponent} from "./checkbox/checkbox.component";
import {DropdownComponent} from "./dropdown/dropdown.component";

const inputRoutes: Routes = [
    {
        path: '',
        redirectTo: 'input',
        pathMatch: 'full'
    },
    {
        path: 'input',
        component: InputComponent,
        children: [
            {
                path: '',
                component: InputListComponent
            },
            {
                path: 'checkbox',
                component: CheckboxComponent
            },
            {
                path: 'dropdown',
                component: DropdownComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(inputRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class InputRouting {

}
