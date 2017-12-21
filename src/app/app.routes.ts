import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './components/movielist/movielist.component';
import { MovieDetailComponent } from './components/moviedetail/moviedetail.component';

// Route Configuration
export const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'movies/:id', component: MovieDetailComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);