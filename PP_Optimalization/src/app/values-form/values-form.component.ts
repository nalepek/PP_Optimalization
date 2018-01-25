import { Component, OnInit, Input, Output } from '@angular/core';
import { ValuesData } from '../values-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'app-values-form',
    templateUrl: './values-form.component.html',
    styleUrls: ['./values-form.component.css']
})
export class ValuesFormComponent implements OnInit {

    @Output() onModelChanged: EventEmitter<any> = new EventEmitter<any>();
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
        })
            .subscribe(result => {
                this.onModelChanged.emit(result);
                this.data = result;
                console.log(result);
            },
            error => {
                console.log(error);
            }
            );
    }
}
