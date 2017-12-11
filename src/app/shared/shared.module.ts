import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotFoundComponent} from './not-found/not-found.component';
import {AuthGuard} from './services/auth.guard';
import {UserService} from './services/user.service';
import {DataService} from './services/data.service';
import {HttpModule} from '@angular/http';

@NgModule({
    imports: [
        CommonModule, HttpModule
    ],
    declarations: [NotFoundComponent],
    exports: [NotFoundComponent],

    providers: [
        AuthGuard, UserService, DataService
    ],
})
export class SharedModule {
}
