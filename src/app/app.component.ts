import {Component, OnInit} from '@angular/core';
import {DataService} from './shared/services/data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


    display = false;
    modalData: any;

    constructor(protected dataService: DataService) {

    }

    ngOnInit() {
        this.dataService.dataChanged$.subscribe(
            (data) => {
                this.modalData = JSON.parse(data);
                this.display = true;
            }
        );
    }

}
