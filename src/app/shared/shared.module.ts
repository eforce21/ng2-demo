import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DataService} from "./data.service";
import {HttpService} from "./http.service";

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        DataService,
        HttpService
    ]
})
export class SharedModule {
}
