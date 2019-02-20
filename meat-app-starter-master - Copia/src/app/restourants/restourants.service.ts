import {Injectable} from '@angular/core'
import {Restourant} from "./restourant/restourant.model"
import {MEAT_API} from "../app.api"
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'


@Injectable()
export class  RestourantsService{
  
constructor(private http: Http){}
 restourants(): Observable <Restourant[]>{
    return this.http.get(MEAT_API+"/restaurants")
    .map(response => response.json())
 }
}