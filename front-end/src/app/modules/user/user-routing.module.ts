import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account/account.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { ApplicationListComponent } from './application-list/application-list.component';

const routes: Routes = [
  {
    path: 'myaccount',
    component: AccountComponent
  },
  {
    path: 'applications',
    component: ApplicationListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
