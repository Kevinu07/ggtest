export interface IFilterBar {
    queryByName: (query: string) => void;
    onGenreChange: (genreId: number) => void;
}