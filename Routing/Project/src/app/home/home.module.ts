import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';

const routerVar : Routes = [
{
  path:'',
  component:HomeComponent
}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routerVar)
  ]
})
export class HomeModule { }
