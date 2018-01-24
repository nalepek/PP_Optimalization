import { Component, OnInit, Input } from '@angular/core';
import { ValuesData } from '../values-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-values-form',
    templateUrl: './values-form.component.html',
    styleUrls: ['./values-form.component.css']
})
export class ValuesFormComponent implements OnInit {

    @Input() model: any;

    public data: any;

    constructor(private _httpService: HttpClient) { }

    ngOnInit() {
    };

    public getExamples(event) {
        let headers = new HttpHeaders().set(
            'Content-Type',
            'application/json; charset=utf-8'
        );
        let body = JSON.stringify(this.model);

        this._httpService.post("/home", body, {
            headers: headers
        }).subscribe(result => {
            this.data = result;
            console.log(result);
        });
    };

    get diagnostic() { return JSON.stringify(this.data); }
}
