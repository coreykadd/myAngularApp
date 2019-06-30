import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccountModule } from '../modules/client/client.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        RouterModule,
        AccountModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ]
})
export class CoreModule {}
