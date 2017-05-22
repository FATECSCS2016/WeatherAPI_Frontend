import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationComponent } from './station.component';
import { StationsMapComponent } from './stations-map/stations-map.component';
import { routing } from './station.routing';
import { NgaModule } from './../../theme/nga.module';
import { AmChartsModule } from "@amcharts/amcharts3-angular";


import { StationService } from '../../services/station/station.service';
import { Util } from '../../app.util';
import { AgmCoreModule } from '@agm/core';
import { StationDetailsComponent } from './station-details/station-details.component';

@NgModule({
  imports: [
    CommonModule,
    routing,
    NgaModule,
    AmChartsModule,
    AgmCoreModule.forRoot({
      apiKey: Util.GOOGLE_API_KEY
    })
  ],
  providers: [
    StationService
  ],
  declarations: [
    StationComponent, 
    StationsMapComponent, StationDetailsComponent,
  ],
})
export class StationModule { }
