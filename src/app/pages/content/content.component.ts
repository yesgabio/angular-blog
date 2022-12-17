import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css', './content.responsive.component.css']
})
export class ContentComponent implements OnInit {

  @Input()
  contentDayPost: string = ""
  @Input()
  contentAss: string = ""
  @Input()
  photoCover: string = ""
  @Input()
  contentTitle: string = ""
  @Input()
  contentDescription: string = ""
  private id: string | null = "0"

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe( value =>
      this.id = (value.get('id'))
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter( data => data.id === id)[0]
    this.photoCover = result.photo
    this.contentTitle = result.title
    this.contentDescription = result.description
    this.contentDayPost = result.dataPost
    this.contentAss = result.cardAss
  }
}
