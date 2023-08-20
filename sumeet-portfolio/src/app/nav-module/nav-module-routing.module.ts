import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavModuleComponent } from './nav-module.component';

const routes: Routes = [{ path: '', component: NavModuleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavModuleRoutingModule { }
