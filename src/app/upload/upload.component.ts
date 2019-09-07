import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.sass']
})
export class UploadComponent implements OnInit {

  // @ts-ignore
  @ViewChild('labelImport')
  labelImport: ElementRef;

  @Output() file: EventEmitter<FormData> = new EventEmitter<FormData>();

  formImport: FormGroup;
  fileToUpload: File = null;

  constructor(private toastr: ToastrService) {
    this.formImport = new FormGroup({
      importFile: new FormControl('', null)
    });
  }

  ngOnInit() {
  }

  onFileChange(files: FileList) {
    this.labelImport.nativeElement.innerText = Array.from(files)
      .map(f => f.name)
      .join(', ');
    this.fileToUpload = files.item(0);
  }

  convertFile(): void {
    if (this.fileToUpload == null) {
      this.toastr.warning('É necessário carregar um arquivo para prosseguir.', 'Campo obrigatório.', {
        timeOut: 3000
      });
    } else {
      const file = this.getFormData(this.fileToUpload);
      this.file.emit(file);
    }
  }

  getFormData(file: File): FormData {
    const formdata: FormData = new FormData();
    formdata.append('file', file);
    return formdata;
  }

}
