import { Component } from '@angular/core';
import { AppSettings } from '../../app.settings';
import { MovieListProvider } from './movielist.provider';
import { DataResult } from './models/dataresult.model';
import { IMovieList } from './interfaces/movielist.interface';
import { MovieItem } from './models/movieitem.model';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { MovieGenre } from './models/moviegenre.model';

@Component({
  selector: 'component-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss'],
  providers: [MovieListProvider]
})

export class MovieListComponent implements IMovieList {

    movies: MovieItem[];
    filteredMovies: MovieItem[];
    movieGenres: MovieGenre[];
    selectedGenre: MovieGenre;

    query: string = "";
    genreId: number = -1;

    constructor(private movieListProv: MovieListProvider, private appSettings: AppSettings, private _sanitizer: DomSanitizer) {
        
        this.getMovieGenres();
    }

    getMovies = (): void => {
        this.movieListProv.getMovies().subscribe(data => {
            if (data){
                this.movies = data.results;
                this.filteredMovies = this.movies;
            }
        },
        err => console.log(err));
    }

    getMovieGenres = ():void =>{
        this.movieListProv.getMovieGenres().subscribe(data => {
            if (data){
                this.movieGenres = data.genres;
                this.getMovies();
            }
        },
        err => console.log(err));
    }

    getGenreNameById(genreId[]) {
        var genres = "";
        genreId.forEach(element => {
            genres += this.movieGenres.find(x => x.id == element).name;
            genres += ", ";
        });

        return genres;
    }

    queryByName = (query: string) => {
        this.query = query;
        this.filterContent();
        //this.filteredMovies = this.movies.filter(x => x.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    }

    onGenreChange = (genreId: number) => {
        console.log(genreId);
        this.genreId = 28;
        this.filterContent();
    }

    filterContent = () => {
        var vm = this;

        if (vm.genreId !== -1){
            vm.filteredMovies = vm.movies.filter(x => x.genre_ids.indexOf(vm.genreId) !== -1).filter(x => x.title.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1);
        } else {
            vm.filteredMovies = vm.movies.filter(x => x.title.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1);
        }
    }

    getBackground = (imagePath: string): SafeStyle => {
        return this._sanitizer.bypassSecurityTrustStyle("url('http://image.tmdb.org/t/p/w500"+imagePath+"')");
    }
}

