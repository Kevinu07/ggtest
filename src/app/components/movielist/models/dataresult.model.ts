import { MovieItem } from "./movieitem.model";

export class DataResult {
    constructor() {

    }

    public page: number;
    public results: MovieItem[];
    public total_pages: number;
    public total_results: number;
}