import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './routes/home/home.component';
import { Page1Component } from './routes/page1/page1.component';
import { Page2Component } from './routes/page2/page2.component';
import { ServersComponent } from './servers/servers.component';

// Create Routes
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: 'page2/:id/:name', component: Page2Component },

  // Route with Child/Nested Routes
  {
    path: 'servers',
    component: ServersComponent,
    children: [
      // { path: ':id', component: ServerDetails },
      // { path: ':id/edit', component: EditServerComponent },
    ],
  },
  // 404 Should be last Route in the list
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [
    // Register Routes
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
