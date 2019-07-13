import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserService } from 'src/app/shared/services/user.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [UserListComponent, UserDetailsComponent, DashboardComponent],
  imports: [
    SharedModule,
    AdminRoutingModule
  ],
  providers: [UserService],
})
export class AdminModule { }
