import { EventEmitter } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { AppSettings } from "../../app.settings";
import { DataProvider } from "../../providers/data.provider";

export class FilterBarService {
    queryChange: EventEmitter<string> = new EventEmitter();
    genreChange: EventEmitter<number> = new EventEmitter();

    constructor() {}

    emitQueryChangeEvent(query: string) {
        this.queryChange.emit(query);
    }

    getQueryChangeEmitter() {
        return this.queryChange;
    }

    emitGenreChangeEvent(genreId: number) {
        this.genreChange.emit(genreId);
    }

    getGenreChangeEmitter() {
        return this.genreChange;
    }
}