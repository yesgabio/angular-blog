import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input()
  id: string = ""
  @Input()
  photoCover: string = ""
  @Input()
  contentTitle: string = ""
  @Input()
  contentDescription: string = ""

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe( value =>
      console.log(value.get('id'))
    )
  }


}
