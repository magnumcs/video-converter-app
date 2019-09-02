import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConverterComponent} from './converter/converter.component';

const routes: Routes = [
  { path: '', redirectTo: 'converter', pathMatch: 'full' },
  { path: 'converter', component: ConverterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
