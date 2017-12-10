import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {validateEmail} from '../../../shared/validators/email-validator.directive';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {UserService} from '../../../shared/services/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public form: FormGroup;
    public loader = false;

    constructor(private router: Router, protected userService: UserService) {
        this.form = new FormGroup({
            'email': new FormControl('', [Validators.required, validateEmail()])
        });
    }

    ngOnInit() {
    }

    submit() {
        if (this.form.valid) {
            this.loader = true;
            Observable.timer(2000).subscribe(() => {
                this.loader = false;
                this.userService.login();
                this.router.navigateByUrl('/');
            });
        }
    }

}
