import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeelingTablePageComponent } from 'src/app/pages/feeling-table-page/feeling-table-page.component';

import { NewFeelingPageComponent } from 'src/app/pages/new-feeling-page/new-feeling-page.component';
import { PageNotFoundPageComponent } from 'src/app/pages/page-not-found-page/page-not-found-page.component';

const routes: Routes = [
  { path: '', component: NewFeelingPageComponent },
  { path: 'new', component: NewFeelingPageComponent },
  { path: 'list', component: FeelingTablePageComponent },
  { path: '**', component: PageNotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
