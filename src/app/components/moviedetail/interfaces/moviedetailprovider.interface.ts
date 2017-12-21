import { Observable } from "rxjs/Observable";

export interface IMovieDetailProvider {
    getMovieById: (id: number) => Observable<any>;
}