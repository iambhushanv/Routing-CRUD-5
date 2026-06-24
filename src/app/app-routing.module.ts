import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDashComponent } from './shared/comp/home-dash/home-dash.component';
import { ProdutsDashComponent } from './shared/comp/produts-dash/produts-dash.component';
import { ProductFormComponent } from './shared/comp/produts-dash/product-form/product-form.component';
import { ProductDetailsComponent } from './shared/comp/produts-dash/product-details/product-details.component';
import { FairsDashComponent } from './shared/comp/fairs-dash/fairs-dash.component';
import { PageNotFoundComponent } from './shared/comp/page-not-found/page-not-found.component';
import { UsersDashComponent } from './shared/comp/users-dash/users-dash.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeDashComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component : ProdutsDashComponent
  },
  {
    path : 'products/addProduct',
    component: ProductFormComponent
  },
   {
    path : 'products/:id',
    component: ProductDetailsComponent
  },
   {
    path : 'products/:id/edit',
    component: ProductFormComponent
  },
    {
    path : 'fairs',
    component: FairsDashComponent
  },
    {
    path : 'users',
    component: UsersDashComponent
  },
  
    {
    path : 'Page-Not-Found',
    component : PageNotFoundComponent
  },
   {
    path : '**',
    redirectTo : 'Page-Not-Found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
