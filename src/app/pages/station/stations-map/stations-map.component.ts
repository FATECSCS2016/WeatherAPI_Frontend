import { Component, OnInit, ElementRef } from '@angular/core';
import * as GoogleMapsLoader from 'google-maps';
import { StationService } from '../../../services/station/station.service';
import { Station } from '../../../models/station';

@Component({
  selector: 'app-stations-map',
  templateUrl: './stations-map.component.html',
  styleUrls: ['./stations-map.component.scss']
})
export class StationsMapComponent implements OnInit {
  private saoPauloPosition = { lat: -23.5505, lng: -46.6333 };

  constructor( private _elementRef: ElementRef, private stationService: StationService ) { }

  private stations: Station[] = [];
  ngOnInit() {
  }

  ngAfterViewInit() {
    let el = this._elementRef.nativeElement.querySelector('.google-maps');

    // TODO: do not load this each time as we already have the library after first attempt
    GoogleMapsLoader.load((google) => {

      const map = new google.maps.Map(el, {
        center: this.saoPauloPosition,
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });

      this.stationService.getAll().then((data: Station[]) => {
        const markers = [];
        const contents = [];
        const infowindows = [];
        for (let i = 0; i < data.length ;i++){
          const position = {
            lat: data[i].location.coordinates[0],
            lng: data[i].location.coordinates[1],
          };
   
          const contentString = `<div id="content" style="color:black;">
              <h1 id="firstHeading" class="firstHeading">${ data[i]._id }</h1>
              <div id="bodyContent">
                <p>
                  <table>
                    <tr>
                      <td>City:</td><td>${ data[i].location.city }</td>
                    </tr>
                    <tr>
                      <td>Temperature:</td><td>${ data[i].data.temperature }</td>
                    </tr>
                    <tr>
                      <td>Humidity:</td><td>${ data[i].data.humidity }</td>
                    </tr>
                  </table>
                </p>
                <center>
                  <button type="button" class="btn btn-info btn-raised"> 
                      Detalhes 
                  </button> 
                <center>
              </div>
            </div>`;
          infowindows[i] = new google.maps.InfoWindow({ content: contentString });

          markers[i] = new google.maps.Marker({
            position: position,
            map: map,
            title: data[i]._id
          });
          markers[i].addListener('click', function() {
            infowindows[i].open(map, markers[i]);
          });
        }

      });

    });
  }

}
