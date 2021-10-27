import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { VideosConfigPage } from './pages/videos-config/videos-config.page';
import { AdminLayout } from './admin.layout';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'admin',
    redirectTo: 'videos-config',
  },
  {
    path: '',
    component: AdminLayout,
    children: [
      {
        path: 'videos-config',
        component: VideosConfigPage,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
