import { NgModule } from '@angular/core';
import { AccountComponent } from './account/account.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ApplicationListComponent } from './application-list/application-list.component';
import { ApplicationDetailsComponent } from './application-details/application-details.component';

@NgModule({
  declarations: [
    AccountComponent,
    ApplicationListComponent,
    ApplicationDetailsComponent
  ],
  imports: [
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
