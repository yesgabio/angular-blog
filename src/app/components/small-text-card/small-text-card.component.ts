import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-small-text-card',
  templateUrl: './small-text-card.component.html',
  styleUrls: ['./small-text-card.component.css', './small-text-card.responsive.component.css']
})
export class SmallTextCardComponent implements OnInit {

  @Input()
  id: string = ""
  @Input()
  dayPost: string = ""
  @Input()
  cardTitle: string = ""
  @Input()
  photoCover: string = ""
  @Input()
  cardAss: string = ""
  @Input()
  cardText: string = ""

  constructor() { }

  ngOnInit() {
  }

}
