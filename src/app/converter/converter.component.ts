import { Component, OnInit } from '@angular/core';
import {ConverterService} from '../shared/services/converter.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.sass']
})
export class ConverterComponent implements OnInit {

  constructor(private converterService: ConverterService) { }

  ngOnInit() {
  }

  convertVideo(video) {
    if (video instanceof FormData) {
      this.converterService.convertFile(video).subscribe(r => {
        console.log(r);
      });
    } else {
      this.converterService.convertFileURL(video).subscribe(r => {
        console.log(r);
      });
    }
  }
}
