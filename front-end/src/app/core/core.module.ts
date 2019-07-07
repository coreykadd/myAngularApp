import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ClientModule } from '../modules/client/client.module';
import { AuthModule } from '../modules/auth/auth.module';
import { AdminModule } from '../modules/admin/admin.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        RouterModule,
        ClientModule,
        AuthModule,
        AdminModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ]
})
export class CoreModule {}
