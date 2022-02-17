import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path:'products',
    loadChildren : ()=>import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path:'sales',
    loadChildren : ()=>import('./sales/sales.module').then(m => m.SalesModule),
  },
  {
     path: 'payment',
    loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
