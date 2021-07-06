import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToastrExampleComponent } from './components/toastr-example.component';

const routes: Routes = [
  {
    path: '',
    component: ToastrExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToastrExampleRoutingModule { }
