import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  {path: 'elements', loadChildren: () => import('./elements/elements.module').then(e => e.ElementsModule)},
  {path: 'collections', loadChildren: () => import('./collections/collections.module').then(c => c.CollectionsModule)},
  {path: 'views', loadChildren: () => import('./views/views.module').then(v => v.ViewsModule)},
  {path: '', component: HomeComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
