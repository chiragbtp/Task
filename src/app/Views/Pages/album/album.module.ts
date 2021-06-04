import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { AlbumRoutingModule } from './album.routing.module';
import { AlbumComponent } from './album.component';
import { AlbumListComponent } from './album-list/album-list.component';

@NgModule({
    imports: [
        CommonModule,
        AlbumRoutingModule,
        MaterialModule
    ],
    declarations: [AlbumComponent, AlbumListComponent]
})
export class AlbumModule { }
