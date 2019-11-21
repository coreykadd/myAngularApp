import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { ApplicationListComponent } from './application-list/application-list.component';
import { TodoAppComponent } from './todo-app/todo-app.component';

const routes: Routes = [
    {
        path: 'applications',
        component: ApplicationListComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'applications/todo',
        component: TodoAppComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
