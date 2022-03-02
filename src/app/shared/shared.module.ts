import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// PrimeNG libray
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { KnobModule } from 'primeng/knob';
import { ScrollTopModule } from 'primeng/scrolltop';

import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { FooterComponent } from '@shared/components/footer/footer.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TooltipModule,
    ConfirmDialogModule,
    KnobModule,
    ScrollTopModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    RouterModule,
    TooltipModule,
    ConfirmDialogModule,
    KnobModule,
    ScrollTopModule,
  ]
})
export class SharedModule { }
