import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumComponent } from './album.component';



const routes: Routes = [
    {
        path: '',
        component: AlbumComponent
    },
    {
        path: 'albumList',
        component: AlbumListComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AlbumRoutingModule { }
