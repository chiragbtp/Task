import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumComponent } from '../../Pages/album/album.component';
import { HomeComponent } from './home.component';



const routes: Routes = [
    {
        path: '',
        redirectTo: 'main', pathMatch: 'full'
    },
    {
        path: 'main', 
        loadChildren: () => import('src/app/Views/Pages/main/main.module').then(m => m.MainModule)
    },
        {
            path: 'album', 
            loadChildren: () => import('src/app/Views/Pages/album/album.module').then(m => m.AlbumModule),
        },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
