import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideosConfigPage } from './modules/admin/pages/videos-config/videos-config.page';
import { HomePage } from './modules/app/pages/home/home.page';
import { PlayerPage } from './modules/app/pages/player/player.page';
import { SearchPage } from './modules/app/pages/search/search.page';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/app/main-app.module').then((m) => m.MainAppModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
