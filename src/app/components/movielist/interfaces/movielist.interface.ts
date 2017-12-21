import { MovieItem } from "../models/movieitem.model";
import { SafeStyle } from "@angular/platform-browser";

export interface IMovieList {
    movies: MovieItem[];
    getMovies: () => void;
    getBackground: (imagePath: string) => SafeStyle;
}