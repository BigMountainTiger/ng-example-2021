import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaddaExampleComponent } from './example/ladda-example.component';

const routes: Routes = [{ path: '', component: LaddaExampleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaddaExampleRoutingModule { }
