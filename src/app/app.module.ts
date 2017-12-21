import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

import { DataProvider } from './providers/data.provider';
import { AppSettings } from './app.settings';

import { HeaderComponent } from './components/header/header.component';
import { FilterBarComponent } from './components/filterbar/filterbar.component';
import { MovieListComponent } from './components/movielist/movielist.component';
import { MovieDetailComponent } from './components/moviedetail/moviedetail.component';
import { FilterBarService } from './components/filterbar/filterbar.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterBarComponent,
    MovieListComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
  ],
  providers: [DataProvider, AppSettings, FilterBarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
