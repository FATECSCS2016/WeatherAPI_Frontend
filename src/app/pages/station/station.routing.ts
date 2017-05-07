import { Routes, RouterModule } from '@angular/router';

import { StationComponent } from './station.component';
import { StationsMapComponent } from './stations-map/stations-map.component';

const routes: Routes = [
  {
    path: '',
    component: StationComponent,
    children: [
      { path: 'maps', component: StationsMapComponent },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
