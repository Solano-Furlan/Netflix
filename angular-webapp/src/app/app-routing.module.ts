import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideosConfigPage } from './modules/admin/pages/videos-config/videos-config.page';
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
  {
    path: 'videos-config',
    component: VideosConfigPage,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
