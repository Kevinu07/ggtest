import { Component } from '@angular/core';
import { AppSettings } from '../../app.settings';
import { MovieListProvider } from './movielist.provider';
import { DataResult } from './models/dataresult.model';
import { IMovieList } from './interfaces/movielist.interface';
import { MovieItem } from './models/movieitem.model';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { MovieGenre } from './models/moviegenre.model';
import { FilterBarService } from '../filterbar/filterbar.service';

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

    query: string;
    genreId: number;

    subscriptionQuery: any;
    subscriptionGenre: any;

    constructor(private movieListProv: MovieListProvider, private appSettings: AppSettings, private _sanitizer: DomSanitizer, private filterBarService: FilterBarService) {      
        this.getMovieGenres();
    }

    ngOnInit() {
        this.query = "";
        this.genreId = +"-1";

        this.subscriptionQuery = this.filterBarService.getQueryChangeEmitter()
          .subscribe(item => this.queryByName(item));

        this.subscriptionGenre = this.filterBarService.getGenreChangeEmitter()
          .subscribe(item => this.genreChange(item));
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

    getMovieGenres = ():void => {
        this.movieListProv.getMovieGenres().subscribe(data => {
            if (data){
                this.movieGenres = data.genres;
                this.getMovies();
            }
        },
        err => console.log(err));
    }

    getGenreNameById = (genreId[]) => {
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
    }

    genreChange = (genreId: number) => {
        this.genreId = +genreId;
        this.filterContent();
    }

    filterContent = () => {
        var vm = this;

        if (vm.genreId === -1){
            vm.filteredMovies = vm.movies;
            vm.filteredMovies = vm.movies.filter(x => x.title.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1);
        } else {
            vm.filteredMovies = vm.movies.filter(x => x.genre_ids.indexOf(vm.genreId) !== -1).filter(x => x.title.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1);
        }
    }

    getBackground = (imagePath: string): SafeStyle => {
        return this._sanitizer.bypassSecurityTrustStyle("url('http://image.tmdb.org/t/p/w500"+imagePath+"')");
    }
}

