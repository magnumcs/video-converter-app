import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ConverterComponent } from './converter/converter.component';
import { UploadComponent } from './upload/upload.component';
import { CardComponent } from './card/card.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UrlComponent } from './url/url.component';
import {ConverterService} from './shared/services/converter.service';
import {HttpClientModule} from '@angular/common/http';
import { PlayerComponent } from './player/player.component';
import { AboutComponent } from './about/about.component';
import {NgxSpinnerModule, NgxSpinnerService} from 'ngx-spinner';
import {ToastrModule} from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ConverterComponent,
    UploadComponent,
    CardComponent,
    UrlComponent,
    PlayerComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    ToastrModule.forRoot()
  ],
  providers: [ConverterService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
