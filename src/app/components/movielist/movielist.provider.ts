import { Injectable } from "@angular/core";
import { DataProvider } from "../../providers/data.provider";
import { AppSettings } from "../../app.settings";
import { IMovieListProvider } from "./interfaces/movielistprovider.inerface";
import { Observable } from "rxjs/Observable";

@Injectable()
export class MovieListProvider implements IMovieListProvider {
    constructor(private dataProvider: DataProvider, private appSettings: AppSettings) {
        
    }

    getMovies = ():Observable<any> => {
        return this.dataProvider.getData(this.appSettings.apiBaseUrl + "discover/movie?" + this.appSettings.apiKey);
    }

    getMovieGenres = ():Observable<any> => {
        return this.dataProvider.getData(this.appSettings.apiBaseUrl + "genre/movie/list?" + this.appSettings.apiKey);
    }
}
