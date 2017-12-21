import { MovieItem } from "../models/movieitem.model";
import { SafeStyle } from "@angular/platform-browser";

export interface IMovieDetail {
    movie: MovieItem;
    getMovieById: (id: number) => void;
    getBackground: (imagePath) => SafeStyle;
}