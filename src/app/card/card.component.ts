import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Video} from '../shared/models/video.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  @Output() video: EventEmitter<any> = new EventEmitter<any>();

  private options = true;

  constructor() { }

  ngOnInit() {
  }

  reciverFeedback(video) {
    this.video.emit(video);
  }


}
