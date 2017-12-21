import { Observable } from "rxjs/Observable";

export interface IMovieListProvider {
    getMovies: () => Observable<any>;
    getMovieGenres: () => Observable<any>;
}