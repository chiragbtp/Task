import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Views/layout/home/home.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/home/main',
    pathMatch: 'full'
},
{
  path: 'home', 
  loadChildren: () => import('src/app/Views/layout/home/home.module').then(m => m.HomeModule),
  component:HomeComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
