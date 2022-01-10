import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewFeelingPageComponent } from './new-feeling-page.component';


const routes: Routes = [
  {
    path: '',
    component: NewFeelingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewFeelingPageRoutingModule { }