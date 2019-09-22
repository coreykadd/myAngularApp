import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account/account.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { ApplicationListComponent } from './application-list/application-list.component';

const routes: Routes = [
  {
    path: 'myaccount',
    component: AccountComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'applications',
    component: ApplicationListComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
