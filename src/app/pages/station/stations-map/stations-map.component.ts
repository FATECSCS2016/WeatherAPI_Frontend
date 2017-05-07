import { Component, OnInit, ElementRef } from '@angular/core';
import { StationService } from '../../../services/station/station.service';
import { Station } from '../../../models/station';

@Component({
  selector: 'app-stations-map',
  templateUrl: './stations-map.component.html',
  styleUrls: ['./stations-map.component.scss']
})
export class StationsMapComponent implements OnInit {
  private saoPauloPosition = { lat: -23.5505, lng: -46.6333 };
  lat: number = -23.688727;
  lng: number = -46.523365;
  statios: Station[] = [];
  constructor( private _elementRef: ElementRef, private stationService: StationService ) { }

  private stations: Station[] = [];
  ngOnInit() {
    this.stationService.getAll().then((data: Station[]) => {
      this.stations = data;
    })
  }

  ngAfterViewInit() {
    
  }

}
