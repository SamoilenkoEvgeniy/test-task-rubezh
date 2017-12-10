import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {DialogModule} from 'primeng/primeng';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,
        AppRoutingModule,
        RouterModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        DialogModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
