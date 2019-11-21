import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
    {
        path: 'user',
        loadChildren: './modules/user/user.module#UserModule'
    },
    {
        path: 'auth',
        loadChildren: './modules/auth/auth.module#AuthModule'
    },
    {
        path: 'admin',
        loadChildren: './modules/admin/admin.module#AdminModule',
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'myaccount',
        component: AccountComponent
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes/*, {enableTracing: true}*/)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
