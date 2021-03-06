import { Component } from '@angular/core';
import { AppSettings } from '../../app.settings';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { MovieItem } from './models/movieitem.model';
import { MovieProvider } from './moviedetail.provider';
import { IMovieDetail } from './interfaces/moviedetail.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'component-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.scss'],
  providers: [MovieProvider]
})

export class MovieDetailComponent implements IMovieDetail {

    movie: MovieItem;

    constructor(private route: ActivatedRoute, private movieProv: MovieProvider, private appSettings: AppSettings, private _sanitizer: DomSanitizer) {
        let movieId = this.route.snapshot.params.id;
        this.getMovieById(movieId);
    }

    getMovieById = (movieId: number): void => {
        this.movieProv.getMovieById(movieId).subscribe(data => {
            if (data){
                this.movie = data;
            }
        },
        err => console.log(err));
    }

    getBackground = (imagePath: string): SafeStyle => {
        return this._sanitizer.bypassSecurityTrustStyle("url('https://image.tmdb.org/t/p/original"+imagePath+"')");
    }
}

