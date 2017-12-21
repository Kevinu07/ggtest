import { EventEmitter } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { AppSettings } from "../../app.settings";
import { DataProvider } from "../../providers/data.provider";
import { Injectable } from "@angular/core";
import { IFilterBarProvider } from "./interfaces/filterbarprovider.interface";

@Injectable()
export class FilterBarProvider implements IFilterBarProvider  {

  constructor(private appSettings: AppSettings, private dataProvider: DataProvider) {}

  getMovieGenres = ():Observable<any> => {
    return this.dataProvider.getData(this.appSettings.apiBaseUrl + "genre/movie/list?" + this.appSettings.apiKey);
  }
}