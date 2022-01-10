import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeelingTablePageComponent } from './feeling-table-page.component';


const routes: Routes = [
  {
    path: '',
    component: FeelingTablePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeelingTablePageRoutingModule { }