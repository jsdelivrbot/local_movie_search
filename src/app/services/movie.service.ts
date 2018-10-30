import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {IMovieResults} from '../models/movie.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class MovieService {

    private _allMovies$ = new BehaviorSubject<IMovieResults[]>([]);

    private _searchValue$ = new BehaviorSubject<string>('');

    private _movieList$ = new BehaviorSubject<IMovieResults[]>([]);

    constructor(
        private http: HttpClient
    ) {}

    public loadMoviesData() {
        this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=c68930c35b32258d5cebfd8c8674caeb&language=en-US&page=1')
            .subscribe((movies: IMovieResults) => {
                this._movieList$.next(movies.results);
                this._allMovies$.next(movies.results);
            });
    }

    public get getSearchValue$(): Observable<string> {
        return this._searchValue$.asObservable();
    }

    public get movieList$(): Observable<IMovieResults[]> {
        return this._movieList$.asObservable();
    }

    public get allMoviesValue(): IMovieResults[] {
        return this._allMovies$.getValue();
    }

    public setMovieList$(filteredList: IMovieResults[]) {
        this._movieList$.next(filteredList);
    }

    public appendSearchValue(val) {
        this._searchValue$.next(val);
    }

}
