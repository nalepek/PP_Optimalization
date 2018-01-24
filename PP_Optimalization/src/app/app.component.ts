import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ValuesData } from './values-data';

import { jsEquations } from '../assets/js/external';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    jsEquations: any;
    data: any;
    equationsLoaded = false;
    model = new ValuesData(10, 10, 10, 10, 10, 10, 1, 10);

    constructor(private _httpService: HttpClient) {
        jsEquations();
    }

    ngOnInit() {
        this._httpService.get('/home').subscribe(result => {
            this.data = result;
            this.equationsLoaded = true;
            console.log(this.data);
        });
    };

    public getExamples(event) {

    };
}
