import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './shared/not-found/not-found.component';
import {NgModule} from '@angular/core';
import {AuthGuard} from './shared/services/auth.guard';

const appRoutes: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        loadChildren: './private-office/private-office.module#PrivateOfficeModule'
    },
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
    declarations: [],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {
}
