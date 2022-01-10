import { ErrorHandler, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

import { NewFeelingPageModule } from 'src/app/modules/pages/new-feeling-page/new-feeling-page.module';
import { FeelingTablePageModule } from 'src/app/modules/pages/feeling-table-page/feeling-table-page.module';
import { PageNotFoundPageModule } from 'src/app/modules/pages/page-not-found-page/page-not-found-page.module';

import { environment } from 'src/environments/environment.prod';
import { FeelingsState, FEELINGS_STATE_TOKEN } from 'src/shared/state/FeelingsState/feelings.state';
import { GlobalErrorService } from 'src/app/services/utils/global-error/global-error.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // Setup
    NgxsModule.forRoot([FeelingsState], { developmentMode: !environment.production }),
    NgxsStoragePluginModule.forRoot({ key: FEELINGS_STATE_TOKEN.getName() }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // Pages
    NewFeelingPageModule,
    FeelingTablePageModule,
    PageNotFoundPageModule,

    // Other
    HttpClientModule,
  ],
  providers: [{ provide: ErrorHandler, useClass: GlobalErrorService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
