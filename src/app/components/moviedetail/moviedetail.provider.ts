import { Injectable } from "@angular/core";
import { DataProvider } from "../../providers/data.provider";
import { AppSettings } from "../../app.settings";
import { Observable } from "rxjs/Observable";
import { IMovieDetailProvider } from "./interfaces/moviedetailprovider.interface";

@Injectable()
export class MovieProvider implements IMovieDetailProvider {
    constructor(private dataProvider: DataProvider, private appSettings: AppSettings) {
        
    }

    getMovieById = (id: number):Observable<any> => {
        return this.dataProvider.getData(this.appSettings.apiBaseUrl + "movie/" + id + "?" + this.appSettings.apiKey);
    }
}
