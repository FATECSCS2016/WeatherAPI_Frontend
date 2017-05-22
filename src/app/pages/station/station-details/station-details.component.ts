import { Component, OnInit , ElementRef, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StationService } from './../../../services/station/station.service';
import { Station, StationData } from './../../../models/station';
import { AmChartsService } from '@amcharts/amcharts3-angular';

@Component({
  selector: 'app-station-details',
  templateUrl: './station-details.component.html',
  styleUrls: ['./station-details.component.scss']
})
export class StationDetailsComponent implements OnInit {

  private sub: any;
  private device_id: string;
  private chart: any;
  stationrData: StationData;
  data = {
    'type': "serial",
      "theme": "dark",
      "dataProvider": [],
      "valueAxes": [{
          "axisAlpha": 0,
          "position": "left"
      }],
      "graphs": [{
          "id":"g1",
          "balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
          "bullet": "round",
          "bulletSize": 8,
          "lineColor": "#d1655d",
          "lineThickness": 2,
          "negativeLineColor": "#637bb6",
          "type": "smoothedLine",
          "valueField": "value"
      }],
      "chartScrollbar": {
          "graph":"g1",
          "gridAlpha":0,
          "color":"#888888",
          "scrollbarHeight":55,
          "backgroundAlpha":0,
          "selectedBackgroundAlpha":0.1,
          "selectedBackgroundColor":"#888888",
          "graphFillAlpha":0,
          "autoGridCount":true,
          "selectedGraphFillAlpha":0,
          "graphLineAlpha":0.2,
          "graphLineColor":"#c2c2c2",
          "selectedGraphLineColor":"#888888",
          "selectedGraphLineAlpha":1

      },
      "chartCursor": {
          "categoryBalloonDateFormat": "YYYY",
          "cursorAlpha": 0,
          "valueLineEnabled":true,
          "valueLineBalloonEnabled":true,
          "valueLineAlpha":0.5,
          "fullWidth":true
      },
      "dataDateFormat": "YYYY",
      "categoryField": "year",
      "categoryAxis": {
          "minPeriod": "YYYY",
          "parseDates": true,
          "minorGridAlpha": 0.1,
          "minorGridEnabled": true
      }
  };
  constructor(
    private route: ActivatedRoute, 
    private AmCharts: AmChartsService,
    private stationService: StationService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.device_id = params['device_id']; 
      if ( this.device_id !== undefined) {
        console.log(this.device_id);
        this.retrieveData();
      }
    });

    this.chart = this.AmCharts.makeChart("chartdiv", this.data);
  }
  

  retrieveData() {
    this.stationService.getByID(this.device_id).then((stData: StationData) => {
      console.log(stData);
      //this.data.dataProvider = stData.data;
    })
  }
  OnDestroy() {
    this.AmCharts.destroyChart(this.chart);
    this.sub.unsubscribe();
  }

}
