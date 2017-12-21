import { Observable } from "rxjs/Observable";

export interface IFilterBarProvider {
    getMovieGenres: () => Observable<any>;
}