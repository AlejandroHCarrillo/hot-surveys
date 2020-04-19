import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { GraficaBarrasHorizontalComponent } from './grafica-barras-horizontal/grafica-barras-horizontal.component';



@NgModule({
  declarations: [
    NavbarComponent, 
    GraficaBarrasHorizontalComponent
  ],
  exports: [
    NavbarComponent, 
    GraficaBarrasHorizontalComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
