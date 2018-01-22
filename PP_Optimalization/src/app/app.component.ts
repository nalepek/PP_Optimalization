import { Component } from '@angular/core';
import { Http } from '@angular/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

    constructor(private _httpService: Http) { }

    public data = [];

    ngOnInit() {
        this._httpService.get('/home').subscribe(data => {
            this.data = data.json()
        });
    }

    public getExamples(event) {

    }
}
