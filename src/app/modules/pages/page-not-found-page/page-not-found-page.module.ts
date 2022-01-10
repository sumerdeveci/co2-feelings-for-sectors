import { NgModule } from '@angular/core';

import { CoreModule } from 'src/app/modules/other/core/core.module';
import { PageNotFoundPageRoutingModule } from 'src/app/modules/pages/page-not-found-page/page-not-found-page-routing.module';

import { PageNotFoundPageComponent } from './page-not-found-page.component';


@NgModule({
  imports: [
    CoreModule,
    PageNotFoundPageRoutingModule,
  ],
  declarations: [
    PageNotFoundPageComponent
  ]
})
export class PageNotFoundPageModule { }