import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css', './small-card.responsive.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  dayPost: string = ""
  @Input()
  photoCover: string = ""
  @Input()
  cardTitle: string = ""
  @Input()
  cardText: string = ""

  constructor() { }

  ngOnInit() {
  }

}
