import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    SideBarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule
  ],
  exports: [
  ]
})
export class LayoutModule { }
