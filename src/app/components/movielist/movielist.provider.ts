import { Injectable } from "@angular/core";
import { DataProvider } from "../../providers/data.provider";
import { AppSettings } from "../../app.settings";

@Injectable()
export class MovieListProvider {
    constructor(private dataProvider: DataProvider, private appSettings: AppSettings) {
        
    }

    public getMovies(params?: string) {
        return this.dataProvider.getData(this.appSettings.apiBaseUrl + "discover/movie?" + this.appSettings.apiKey);
    }
}
