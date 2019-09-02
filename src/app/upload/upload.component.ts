import {Component, ElementRef, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Video} from '../shared/models/video.model';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.sass']
})
export class UploadComponent implements OnInit {

  // @ts-ignore
  @ViewChild('labelImport')
  labelImport: ElementRef;

  @Output() video: Video;

  formImport: FormGroup;
  fileToUpload: File = null;

  constructor() {
    this.formImport = new FormGroup({
      importFile: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.video = null;
  }

  onFileChange(files: FileList) {
    this.labelImport.nativeElement.innerText = Array.from(files)
      .map(f => f.name)
      .join(', ');
    this.fileToUpload = files.item(0);
  }

  convert(): void {
    this.video.fileName = this.getFileName(this.fileToUpload.name);
    this.video.size = this.fileToUpload.size;
    this.video.file = this.getFormData(this.fileToUpload);
  }

  getFormData(file: File): FormData {
    const formdata: FormData = new FormData();
    formdata.append('file', file);
    return formdata;
  }

  getFileName(file: string): string {
    return file.substring(file.lastIndexOf('/'), file.indexOf('.'));
  }

}
