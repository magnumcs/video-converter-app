import {Component, Input, OnInit, Output} from '@angular/core';
import {Video} from '../shared/models/video.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  @Input() setVideo: Video;
  @Output() video: Video;

  private options = true;

  constructor() { }

  ngOnInit() {
    console.log(this.setVideo);
  }

}
