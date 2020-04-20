import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { NavbarComponent } from './navbar/navbar.component';
import { GraficaBarrasHorizontalComponent } from './grafica-barras-horizontal/grafica-barras-horizontal.component';

@NgModule({
  declarations: [
    NavbarComponent, 
    GraficaBarrasHorizontalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  exports: [
    NavbarComponent, 
    GraficaBarrasHorizontalComponent
  ],
})
export class ComponentsModule { }
