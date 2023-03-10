import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { LifeCyclesComponent } from './life-cycles/life-cycles.component';
import { DirectivesComponent } from './directives/directives.component';
import { RedbgDirective } from './directives/redbg.directive';
import { BluebgDirective } from './directives/bluebg.directive';
import { GreenbgDirective } from './directives/greenbg.directive';
import { ShowOddDirective } from './directives/show-odd.directive';
import { ForPrintInfoServiceComponent } from './services-components/for-print-info-service/for-print-info-service.component';
import { ForGlobalStorageServiceComponent } from './services-components/for-global-storage-service/for-global-storage-service.component';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './routes/page1/page1.component';
import { Page2Component } from './routes/page2/page2.component';
import { HomeComponent } from './routes/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    LifeCyclesComponent,
    DirectivesComponent,
    RedbgDirective,
    BluebgDirective,
    GreenbgDirective,
    ShowOddDirective,
    ForPrintInfoServiceComponent,
    ForGlobalStorageServiceComponent,
    Page1Component,
    Page2Component,
    HomeComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
