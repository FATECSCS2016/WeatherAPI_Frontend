import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { Util } from './../../app.util';
import { Station, StationData } from './../../models/station';

@Injectable()
export class StationService {

  constructor(private http: Http) { }

  getAll(): Promise<Station[]> {
    const url = `${Util.API_ENDPOINT}stations`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Station[])
      .catch(this.handleError);
  }

  getByID(deviceID: string): Promise<StationData> {
    const url = `${Util.API_ENDPOINT}stations/${deviceID}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as StationData)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
