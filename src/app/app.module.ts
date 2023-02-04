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

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    LifeCyclesComponent,
    DirectivesComponent,
    RedbgDirective,
    BluebgDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
