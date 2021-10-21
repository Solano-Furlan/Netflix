import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './modules/app/pages/home/home.page';
import { PlayerPage } from './modules/app/pages/player/player.page';
import { SearchPage } from './modules/app/pages/search/search.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'player/:id',
    component: PlayerPage,
  },
  {
    path: 'search/:term',
    component: SearchPage,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
