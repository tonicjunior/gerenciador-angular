import { Component, OnInit } from '@angular/core';
import { Restourant } from './restourant/restourant.model';
import { RestourantsService } from './restourants.service';

@Component({
  selector: 'mt-restourants',
  templateUrl: './restourants.component.html'
})
export class RestourantsComponent implements OnInit {

  restourants: Restourant[] 
  constructor(private restourantService: RestourantsService) { }

  ngOnInit() {
    this.restourantService.restourants()
    .subscribe(restaurants => this.restourants = restaurants)
  }

}
