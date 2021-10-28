import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainAppLayout } from './main-app.layout';
import { HomePage } from './pages/home/home.page';
import { SearchPage } from './pages/search/search.page';
import { PlayerPage } from './pages/player/player.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: '',
    component: MainAppLayout,
    children: [
      {
        path: 'home',
        component: HomePage,
      },
      {
        path: 'search/:term',
        component: SearchPage,
      },
      {
        path: 'player/:id',
        component: PlayerPage,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainAppRoutingModule {}
