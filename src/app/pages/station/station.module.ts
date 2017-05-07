import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationComponent } from './station.component';
import { StationsMapComponent } from './stations-map/stations-map.component';
import { routing } from './station.routing';
import { NgaModule } from '../../theme/nga.module';
import { StationService } from '../../services/station/station.service';
import { Util } from '../../app.util';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    routing,
    NgaModule,
    AgmCoreModule.forRoot({
      apiKey: Util.GOOGLE_API_KEY
    })
  ],
  providers: [
    StationService
  ],
  declarations: [
    StationComponent, 
    StationsMapComponent,
    ],
})
export class StationModule { }
