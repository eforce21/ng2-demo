import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {PanelModule, CheckboxModule, DataTableModule} from "primeng/primeng";
import {InputComponent} from "./input.component";
import {CheckboxComponent} from "./checkbox/checkbox.component";
import {InputListComponent} from "./input-list/input-list.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        PanelModule,
        RouterModule,
        CheckboxModule,
        DataTableModule
    ],
    declarations: [
        InputComponent,
        InputListComponent,
        CheckboxComponent
    ]
})
export class InputModule {
}
