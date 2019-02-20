import { Component, OnInit, Input } from '@angular/core';
import { Restourant } from './restourant.model';

@Component({
  selector: 'mt-restourant',
  templateUrl: './restourant.component.html'
})
export class RestourantComponent implements OnInit {

    @Input() restourant: Restourant;

  constructor() { }

  ngOnInit() {
  }

}
