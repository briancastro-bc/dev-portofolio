import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { FooterComponent } from '@shared/components/footer/footer.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    RouterModule
  ]
})
export class SharedModule { }
