import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Vehiculo1Component } from './components/vehiculo1/vehiculo1.component';
import { Vehiculo2Component } from './components/vehiculo2/vehiculo2.component';
import { Vehiculo3Component } from './components/vehiculo3/vehiculo3.component';
import { Vehiculo4Component } from './components/vehiculo4/vehiculo4.component';

@NgModule({
  declarations: [
    AppComponent,
    Vehiculo1Component,
    Vehiculo2Component,
    Vehiculo3Component,
    Vehiculo4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
