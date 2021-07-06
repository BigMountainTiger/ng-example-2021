import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavPersistAComponent } from './components/nav-persist-a/nav-persist-a.component';
import { NavPersistBComponent } from './components/nav-persist-b/nav-persist-b.component';
import { NavPersistContainerComponent } from './components/nav-persist-container/nav-persist-container.component';
import { NavPersistLandingComponent } from './components/nav-persist-landing/nav-persist-landing.component';

const routes: Routes = [
  {
    path: '',
    component: NavPersistContainerComponent,
    children: [
      {
        path: 'a',
        component: NavPersistAComponent
      },
      {
        path: 'b',
        component: NavPersistBComponent
      },
      {
        path: '**',
        component: NavPersistLandingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavPersistExampleRoutingModule { }
