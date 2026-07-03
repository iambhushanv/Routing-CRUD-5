import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDashComponent } from './shared/comp/home-dash/home-dash.component';
import { ProdutsDashComponent } from './shared/comp/produts-dash/produts-dash.component';
import { ProductFormComponent } from './shared/comp/produts-dash/product-form/product-form.component';
import { ProductDetailsComponent } from './shared/comp/produts-dash/product-details/product-details.component';
import { FairsDashComponent } from './shared/comp/fairs-dash/fairs-dash.component';
import { PageNotFoundComponent } from './shared/comp/page-not-found/page-not-found.component';
import { UsersDashComponent } from './shared/comp/users-dash/users-dash.component';
import { UserFormComponent } from './shared/comp/users-dash/user-form/user-form.component';
import { UserDetailComponent } from './shared/comp/users-dash/user-detail/user-detail.component';

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
    component: ProdutsDashComponent,
    children: [
      {
        path: 'addProduct',
        component: ProductFormComponent
      },
      {
        path: ':id',
        component: ProductDetailsComponent
      },
      {
        path: ':id/edit',
        component: ProductFormComponent
      }
    ]
  },

  {
    path: 'fairs',
    component: FairsDashComponent
  },
  {
    path: 'users',
    component: UsersDashComponent,
    children: [
      {
        path: 'addUser',
        component: UserFormComponent
      },
      {
        path: ':id',
        component: UserDetailComponent
      },
      {
        path: ':id/edit',
        component: UserFormComponent
      }
    ]
  },

  {
    path: 'Page-Not-Found',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'Page-Not-Found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
