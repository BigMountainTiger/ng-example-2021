import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgGridEditButtonComponent } from './components/ag-grid-edit-button/ag-grid-edit-button.component';
import { AgGridEditingComponent } from './components/ag-grid-editing/ag-grid-editing.component';
import { AgGridExampleAComponent } from './components/ag-grid-example-a/ag-grid-example-a.component';
import { AgGridExampleBComponent } from './components/ag-grid-example-b/ag-grid-example-b.component';
import { AgGridLandingComponent } from './components/ag-grid-landing/ag-grid-landing.component';
import { AgGridSortingComponent } from './components/ag-grid-sorting/ag-grid-sorting.component';
import { AgGridExampleContainerComponent } from './components/container/ag-grid-example-container.component';

const routes: Routes = [
  {
    path: '',
    component: AgGridExampleContainerComponent,
    children: [
      {
        path: 'a',
        component: AgGridExampleAComponent
      },
      {
        path: 'b',
        component: AgGridExampleBComponent
      },
      {
        path: 'ag-grid-sorting',
        component: AgGridSortingComponent
      },
      {
        path: 'ag-grid-editing',
        component: AgGridEditingComponent
      },
      {
        path: 'ag-grid-edit-button',
        component: AgGridEditButtonComponent
      },
      {
        path: '**',
        component: AgGridLandingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgGridExampleRoutingModule { }
