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
  private chartHumidity: any;
  private chartTemperature: any;
  stationrData: StationData;
  chartHumidityConfig = {
  "type": "serial",
    "theme": "light",
    "marginRight": 80,
    "valueAxes": [{
        "position": "left",
        "title": "Umidade "
    }],
    "graphs": [{
        "id": "g1",
        "fillAlphas": 0.4,
        "valueField": "humidity",
         "balloonText": "<div style='margin:5px; font-size:19px;'>Umidade:<b>[[humidity]]</b></div>"
    }],
    "chartScrollbar": {
        "graph": "g1",
        "scrollbarHeight": 80,
        "backgroundAlpha": 0,
        "selectedBackgroundAlpha": 0.1,
        "selectedBackgroundColor": "#888888",
        "graphFillAlpha": 0,
        "graphLineAlpha": 0.5,
        "selectedGraphFillAlpha": 0,
        "selectedGraphLineAlpha": 1,
        "autoGridCount": true,
        "color": "#AAAAAA"
    },
    "chartCursor": {
        "categoryBalloonDateFormat": "HH mm DD MMMM",
        "cursorPosition": "mouse"
    },
    "categoryField": "savedAt",
    "categoryAxis": {
        "minPeriod": "mm",
        "parseDates": true
    },
    "dataProvider": [ ]
  } ;

  chartTemperatureConfig = {
  "type": "serial",
    "theme": "light",
    "marginRight": 80,
    "valueAxes": [{
        "position": "left",
        "title": "Umidade "
    }],
    "graphs": [{
        "id": "g1",
        "fillAlphas": 0.4,
        "valueField": "temperature",
         "balloonText": "<div style='margin:5px; font-size:19px;'>Temperatura:<b>[[temperature]]</b></div>"
    }],
    "chartScrollbar": {
        "graph": "g1",
        "scrollbarHeight": 80,
        "backgroundAlpha": 0,
        "selectedBackgroundAlpha": 0.1,
        "selectedBackgroundColor": "#888888",
        "graphFillAlpha": 0,
        "graphLineAlpha": 0.5,
        "selectedGraphFillAlpha": 0,
        "selectedGraphLineAlpha": 1,
        "autoGridCount": true,
        "color": "#AAAAAA"
    },
    "chartCursor": {
        "categoryBalloonDateFormat": "DD MMMM",
        "cursorPosition": "mouse"
    },
    "categoryField": "savedAt",
    "categoryAxis": {
        "minPeriod": "mm",
        "parseDates": true
    },
    "dataProvider": [ ]
  } ;
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

  }

  retrieveData() {
    this.stationService.getByID(this.device_id).then((stData: StationData) => {
      console.log(stData);
      this.chartHumidityConfig.dataProvider = <any>stData.data;//<any>this.generateChartData();//<any>stData.data;
      this.chartTemperatureConfig.dataProvider = <any>stData.data
      this.chartHumidity = this.AmCharts.makeChart("chartdiv", this.chartHumidityConfig);
      this.chartTemperature = this.AmCharts.makeChart("chartTemperature", this.chartTemperatureConfig);
    })
  }
  OnDestroy() {
    this.AmCharts.destroyChart(this.chartHumidity);
    this.AmCharts.destroyChart(this.chartTemperature);
    this.sub.unsubscribe();
  }

}
