import { Component, OnInit } from '@angular/core';
import { ValuesData } from '../values-data'

@Component({
  selector: 'app-values-form',
  templateUrl: './values-form.component.html',
  styleUrls: ['./values-form.component.css']
})
export class ValuesFormComponent implements OnInit {

    model = new ValuesData(10, 10, 10, 10, 10, 10, 10000000, 100);

    
  constructor() { }

  ngOnInit() {
  }

  get diagnostic() { return JSON.stringify(this.model); }
}
