import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/modules/pages/new-feeling-page/new-feeling-page.module').then(c => c.NewFeelingPageModule),
  },
  {
    path: 'new',
    loadChildren: () => import('src/app/modules/pages/new-feeling-page/new-feeling-page.module').then(c => c.NewFeelingPageModule),
  },
  {
    path: 'list',
    loadChildren: () => import('src/app/modules/pages/feeling-table-page/feeling-table-page.module').then(c => c.FeelingTablePageModule),
  },
  {
    path: '**',
    loadChildren: () => import('src/app/modules/pages/page-not-found-page/page-not-found-page.module').then(c => c.PageNotFoundPageModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
