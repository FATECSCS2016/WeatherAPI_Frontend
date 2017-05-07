import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationComponent } from './station.component';
import { StationsMapComponent } from './stations-map/stations-map.component';
import { routing } from './station.routing';

@NgModule({
  imports: [
    CommonModule,
    routing,
  ],
  declarations: [
    StationComponent, 
    StationsMapComponent,
    ],
})
export class StationModule { }
