import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.sass']
})
export class UrlComponent implements OnInit {

  formURL: FormGroup;
  @Output() url: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    this.formURL = new FormGroup({
      url: new FormControl('', null)
    });
  }

  ngOnInit() {
  }

  convertURL(): void {
    const url = this.formURL.get('url').value;
    this.url.emit(url);
  }

}
