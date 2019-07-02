import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { AccountRoutingModule } from './client-routing.module';

@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ],
  exports: [
  ]
})
export class ClientModule { }
