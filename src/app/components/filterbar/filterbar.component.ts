import { Component } from '@angular/core';
import { IFilterBar } from './interfaces/filterbar.interface';
import { MovieGenre } from './models/moviegenre.model';
import { FilterBarService } from './filterbar.service';
import { FilterBarProvider } from './filterbar.provider';

@Component({
  selector: 'component-filterbar',
  templateUrl: './filterbar.component.html',
  styleUrls: ['./filterbar.component.scss'],
  providers: [FilterBarProvider]
})

export class FilterBarComponent implements IFilterBar {

    movieGenres: MovieGenre[];

    constructor(private filterBarService: FilterBarService, private filterBarProvider: FilterBarProvider) { 
        this.getMovieGenres();
    }

    queryByName = (query: string):void => {
        this.filterBarService.emitQueryChangeEvent(query);
    }

    onGenreChange = (genreId: number):void => {
        this.filterBarService.emitGenreChangeEvent(genreId);
    }

    getMovieGenres = ():void => {
        this.filterBarProvider.getMovieGenres().subscribe(data => {
            if (data){
                this.movieGenres = data.genres;
            }
        },
        err => console.log(err));
    }
}

