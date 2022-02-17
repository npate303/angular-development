import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { Routes, RouterModule } from '@angular/router';

const routerVar : Routes = [
{
  path:'',
  component:ProductsComponent
}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routerVar)
  ]
})
export class ProductsModule { }
