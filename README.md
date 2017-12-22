# Ggtest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Notes

- App UI was built using Bootstrap 4
- Comunication between components was obtained by using event emitters and then the other components listens to these events.
- Routing was used to establish the route of movie in detail section where the movie id was passed in the params and then a request to get the movie by id was made.
- An assumption that the filters was to be applied to the data already obtained on the front end rather than making an API call to obtain the filtered data.
- Possible inprovements such as pagination could be done.
