import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeRoutingModule} from './home.routing.module';
import { HomeComponent } from './home.component';
import { TopbarComponent } from '../../Partial/topbar/topbar.component';
import { MaterialModule } from '../../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        MaterialModule,
        FlexLayoutModule,

        
    ],
    exports: [MaterialModule],

    declarations: [HomeComponent,TopbarComponent]
})
export class HomeModule { }
