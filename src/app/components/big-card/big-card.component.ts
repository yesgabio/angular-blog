import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css', './big-card.responsive.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  id: string = ""
  @Input()
  dayPost: string = ""
  @Input()
  photoCover: string = ""
  @Input()
  cardTitle: string = ""
  @Input()
  cardText: string = ""

  constructor() {

  }

  ngOnInit(): void {

  }

}
