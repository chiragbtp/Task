import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { MainComponent } from './main.component';



const routes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: 'comments',
        component: CommentsComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
