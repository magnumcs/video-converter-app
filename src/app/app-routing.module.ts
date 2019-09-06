import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConverterComponent} from './converter/converter.component';
import {PlayerComponent} from './player/player.component';

const routes: Routes = [
  { path: '', redirectTo: 'converter', pathMatch: 'full' },
  { path: 'converter', component: ConverterComponent },
  { path: 'player', component: PlayerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
