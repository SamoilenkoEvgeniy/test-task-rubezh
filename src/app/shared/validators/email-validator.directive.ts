import {AbstractControl, ValidatorFn} from '@angular/forms';
import {Observable} from '../../../../node_modules/rxjs';

export function validateEmail(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        const EMAIL_RE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const passed = EMAIL_RE.test(control.value);

        Observable.timer(300).subscribe(() => {
            if (control.value) {
                console.log(control.value);
            }
        });

        return !passed ? {'email': {value: control.value}} : null;
    };
}