import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {InputRouting} from "./input/input.routing";
import {InputModule} from "./input/input.module";
import {RouterModule} from "@angular/router";
import {routingProvider, routing} from "./app.routes";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        routing,
        FormsModule,
        HttpModule,
        RouterModule,
        InputModule,
        InputRouting
    ],
    providers: [
        routingProvider,
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
