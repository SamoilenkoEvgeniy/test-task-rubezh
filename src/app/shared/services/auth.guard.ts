import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {UserService} from './user.service';

@Injectable()
export class AuthGuard implements CanActivate {

    protected except = [
        '/login',
    ];

    constructor(protected userService: UserService, private router: Router) {

    }

    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        const URL = state.url.split('?')[0];
        if (!this.checkUrl(URL) && !this.userService.isLoggedIn()) {
            this.router.navigate(['/login']);
            return false;
        }

        return true;

    }


    checkUrl(url) {
        const current_pieces = url.split('/');
        let success = false;
        this.except.map(function (item) {
            const pieces = item.split('/');
            let current_success = true;
            pieces.map(function (item_p, index) {
                if (item_p !== current_pieces[index]) {
                    current_success = false;
                }
            });
            if (current_success) {
                success = true;
            }
        });

        return success;
    }
}
