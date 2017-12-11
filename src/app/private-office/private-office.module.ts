import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {PrivateOfficeRoutingModule} from './private-office-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material';
import {TreeModule} from 'primeng/primeng';
import {Http, HttpModule} from '@angular/http';

@NgModule({
    imports: [
        CommonModule,
        PrivateOfficeRoutingModule, ReactiveFormsModule,
        MatProgressSpinnerModule, TreeModule
    ],
    declarations: [LoginComponent, HomeComponent]
})
export class PrivateOfficeModule {
}
