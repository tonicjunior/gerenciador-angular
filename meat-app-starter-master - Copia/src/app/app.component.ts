import {Component, OnInit} from "@angular/core"

@Component({
  selector: 'mt-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  content = 'Meu primeiro APP!'

  constructor() { }

  ngOnInit() {
  }

}
