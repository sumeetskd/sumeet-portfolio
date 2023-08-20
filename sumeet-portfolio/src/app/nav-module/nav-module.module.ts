import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavModuleRoutingModule } from './nav-module-routing.module';
import { NavModuleComponent } from './nav-module.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { MaterialModuleModule } from 'src/material-module/material-module.module';


@NgModule({
  declarations: [
    NavModuleComponent,
    AboutComponent,
    WorkComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    NavModuleRoutingModule,
    MaterialModuleModule
  ]
})
export class NavModuleModule { }
