import { MovieGenre } from "../models/moviegenre.model";

export interface IFilterBar {
    movieGenres: MovieGenre[];
    queryByName: (query: string) => void;
    onGenreChange: (genreId: number) => void;
    getMovieGenres: () => void;
}