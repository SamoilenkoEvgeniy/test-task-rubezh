import {Injectable} from '@angular/core';

@Injectable()
export class UserService {

    private loggedIn = false;

    constructor() {
    }

    login() {
        this.loggedIn = true;
    }

    isLoggedIn() {
        return this.loggedIn;
    }

}
