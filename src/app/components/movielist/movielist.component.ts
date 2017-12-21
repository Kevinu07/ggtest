import { Component } from '@angular/core';
import { AppSettings } from '../../app.settings';
import { MovieListProvider } from './movielist.provider';
import { DataResult } from './models/dataresult.model';
import { IMovieList } from './interfaces/movielist.interface';
import { MovieItem } from './models/movieitem.model';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'component-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss'],
  providers: [MovieListProvider]
})

export class MovieListComponent implements IMovieList {

    movies: any[];

    constructor(private movieListProv: MovieListProvider, private appSettings: AppSettings, private _sanitizer: DomSanitizer) {
        this.getMovies();
    }

    getMovies = (): void => {
        this.movieListProv.getMovies().subscribe(data => {
            if (data){
                var dataRes:DataResult = data;
                this.movies = dataRes.results;
                console.log(this.movies);
            }
        },
        err => console.log(err));
    }

    getBackground = (imagePath: string): SafeStyle => {
        return this._sanitizer.bypassSecurityTrustStyle("url('http://image.tmdb.org/t/p/w500"+imagePath+"')");
    }
    
}

