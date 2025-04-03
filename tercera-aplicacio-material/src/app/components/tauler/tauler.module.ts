import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaulerRoutingModule } from './tauler-routing.module';
import { TaulerComponent } from './tauler.component';
import { NavbarComponent } from '../navbar/navbar.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [TaulerComponent, NavbarComponent],
  imports: [
    CommonModule,
    TaulerRoutingModule,
    MatToolbarModule,
    MatButtonModule,
  ],
})
export class TaulerModule {}
