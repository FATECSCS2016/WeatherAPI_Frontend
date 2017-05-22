import { Routes, RouterModule } from '@angular/router';

import { StationComponent } from './station.component';
import { StationsMapComponent } from './stations-map/stations-map.component';
import { StationDetailsComponent } from './station-details/station-details.component';

const routes: Routes = [
  {
    path: '',
    component: StationComponent,
    children: [
      { path: 'map', component: StationsMapComponent },
      { path: 'map/:device_id', component: StationDetailsComponent },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
