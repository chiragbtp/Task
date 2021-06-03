import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';



const routes: Routes = [
    {
        path: '',
        redirectTo: 'main', pathMatch: 'full'
    },
    {
        path: 'main', 
        loadChildren: () => import('src/app/Views/Pages/main/main.module').then(m => m.MainModule)},

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
