import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.sass']
})
export class UrlComponent implements OnInit {

  formURL: FormGroup;
  @Output() url: EventEmitter<any> = new EventEmitter<any>();

  constructor(private toastr: ToastrService) {
    this.formURL = new FormGroup({
      url: new FormControl('', null)
    });
  }

  ngOnInit() {
  }

  convertURL(): void {
    const url = this.formURL.get('url').value;
    if (url === '') {
      this.toastr.warning('É necessário carregar um arquivo para prosseguir.', 'Campo obrigatório.', {
        timeOut: 3000
      });
    } else {
      this.url.emit(url);
    }
  }

}
