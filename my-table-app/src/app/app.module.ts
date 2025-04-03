import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatTableModule } from '@angular/material/table';
import { TaulaComponent } from './taula/taula.component';

@NgModule({
  declarations: [AppComponent, TaulaComponent],
  imports: [BrowserModule, AppRoutingModule, MatTableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
