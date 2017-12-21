import { MovieItem } from "../models/movieitem.model";
import { SafeStyle } from "@angular/platform-browser";
import { MovieGenre } from "../models/moviegenre.model";

export interface IMovieList {
    movies: MovieItem[];
    filteredMovies: MovieItem[];
    movieGenres: MovieGenre[];
    query: string;
    genreId: number;
    subscriptionQuery: any;
    subscriptionGenre: any;
    getMovies: () => void;
    getMovieGenres: () => void;
    getGenreNameByIds: (genreIds: number[]) => string;
    queryByName: (query: string) => void;
    getBackground: (imagePath) => SafeStyle;
}