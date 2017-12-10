import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    declarations: [],
    exports: [
        RouterModule
    ]
})

export class PrivateOfficeRoutingModule {
}