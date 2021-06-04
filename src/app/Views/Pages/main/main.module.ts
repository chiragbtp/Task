import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule} from './main.routing.module';
import { MainComponent } from './main.component';
import { MaterialModule } from 'src/app/material.module';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
    imports: [
        CommonModule,
        MainRoutingModule,
        MaterialModule
    ],
    declarations: [MainComponent, CommentsComponent]
})
export class MainModule { }
