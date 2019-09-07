import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ConverterService} from '../shared/services/converter.service';
import {Video} from '../shared/models/video.model';
import {ActivatedRouteSnapshot, Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import {ToastrService} from 'ngx-toastr';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.sass']
})
export class ConverterComponent implements OnInit {

  @Output() video: Video;

  constructor(private converterService: ConverterService,
              private router: Router,
              private spinnerService: NgxSpinnerService,
              private toastr: ToastrService) { }

  ngOnInit() {
  }

  convertVideo(video) {
    if (video instanceof FormData) {
      this.spinnerService.show();
      this.converterService.convertFile(video).subscribe(result => {
        this.spinnerService.hide();
        this.toastr.success('O vídeo foi convertido com sucesso!', 'Sucesso!', {
          timeOut: 3000
        });
        this.router.navigate(['/player'], {state: {data: result}});
      }, (err: HttpErrorResponse | any) => {
        if (err.status === 400 || err.status === 405) {
          this.spinnerService.hide();
          this.toastr.error('Ocorreu um erro ao tentar converter o video.', 'Erro interno.', {
            timeOut: 3000
          });
        }
      });
    } else {
      this.converterService.convertFileURL(video).subscribe(v => {
        this.spinnerService.show();
        this.router.navigate(['/player'], {state: {data: v}});
        this.spinnerService.hide();
      });
    }
  }
}
