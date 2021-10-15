import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './modules/app/pages/home/home.page';
import { PlayerPage } from './modules/app/pages/player/player.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'player',
    component: PlayerPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
