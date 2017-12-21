import { Injectable } from "@angular/core";

@Injectable()
export class AppSettings {

    apiBaseUrl: string;
    apiKey: string;

    constructor() {
        this.apiBaseUrl = "https://api.themoviedb.org/3/";
        this.apiKey = "api_key=6545fb818df8c0a9ebb10bbfd7e59cd4";
    }
}