import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavPersistExampleRoutingModule } from './nav-persist-example-routing.module';
import { NavPersistContainerComponent } from './components/nav-persist-container/nav-persist-container.component';
import { NavPersistAComponent } from './components/nav-persist-a/nav-persist-a.component';
import { NavPersistBComponent } from './components/nav-persist-b/nav-persist-b.component';
import { NavPersistLandingComponent } from './components/nav-persist-landing/nav-persist-landing.component';

@NgModule({
  declarations: [
    NavPersistContainerComponent,
    NavPersistAComponent,
    NavPersistBComponent,
    NavPersistLandingComponent
  ],
  imports: [
    CommonModule,
    NavPersistExampleRoutingModule
  ]
})
export class NavPersistExampleModule { }
