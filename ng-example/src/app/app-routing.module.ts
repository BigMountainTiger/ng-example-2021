import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { MainLayoutComponent } from './layout/components/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'life-cycle',
        pathMatch: 'full'
      },
      {
        path: 'life-cycle',
        loadChildren: () => import('./feature/life-cycle/life-cycle.module')
          .then(m => m.LifeCycleModule)
      },
      {
        path: 'toastr-example',
        loadChildren: () => import('./feature/toastr-example/toastr-example.module')
          .then(m => m.ToastrExampleModule)
      },
      {
        path: 'ng-content-example',
        loadChildren: () => import('./feature/ng-content-example/ng-content-example.module')
          .then(m => m.NgContentExampleModule)
      },
      {
        path: 'nav-persist-example',
        loadChildren: () => import('./feature/nav-persist-example/nav-persist-example.module')
          .then(m => m.NavPersistExampleModule)
      },
      {
        path: 'bootstrap-example',
        loadChildren: () => import('./feature/bootstrap-example/bootstrap-example.module')
          .then(m => m.BootstrapExampleModule)
      },
      {
        path: 'ag-grid-example',
        loadChildren: () => import('./feature/ag-grid-example/ag-grid-example.module')
          .then(m => m.AgGridExampleModule)
      },
      {
        path: 'form-validation',
        loadChildren: () => import('./feature/form-validation/form-validation.module')
          .then(m => m.FormValidationModule)
      },
      { 
        path: 'bootstrap-example',
        loadChildren: () => import('./feature/bootstrap-example/bootstrap-example.module')
          .then(m => m.BootstrapExampleModule)
      },
      {
        path: 'ladda-example',
        loadChildren: () => import('./feature/ladda-example/ladda-example.module')
          .then(m => m.LaddaExampleModule)
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: '/ag-grid-example'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
