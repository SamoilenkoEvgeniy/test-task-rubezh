import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DataService} from '../../../shared/services/data.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

    public files;
    public files_second;
    public differences = [];

    constructor(protected dataService: DataService) {
    }

    ngOnInit() {
        this.files = this.dataService.getTreeStructure();
        this.files_second = this.dataService.getTreeStructureSecond();

        this.dataService.cMap(this.files, this.files_second, this.differences);
    }

    report() {
        this.dataService.dataChangedMethod(JSON.stringify(this.differences));
    }

}
