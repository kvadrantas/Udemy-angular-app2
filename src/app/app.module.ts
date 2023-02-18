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
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
