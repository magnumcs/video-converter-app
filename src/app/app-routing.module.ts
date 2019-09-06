import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConverterComponent} from './converter/converter.component';
import {PlayerComponent} from './player/player.component';
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
  { path: '', redirectTo: 'converter', pathMatch: 'full' },
  { path: 'converter', component: ConverterComponent },
  { path: 'player', component: PlayerComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
