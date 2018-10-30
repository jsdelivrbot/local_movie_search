import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {IMovieResults} from '../../models/movie.model';
import {MovieService} from '../../services/movie.service';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, OnDestroy {

    searchValue$: Observable<string>;

    movieList$: Observable<IMovieResults[]>;

    private subscriptions: Subscription;

    constructor(private movieService: MovieService) {
        this.subscriptions = this.movieService.getSearchValue$
            .subscribe((searchStr) => {
                const allMovies = this.movieService.allMoviesValue;
                const filteredMovies = [];
                allMovies.filter((movies) => {
                    if (movies.title.toString().toLocaleLowerCase().startsWith(searchStr.toLowerCase())) {
                        filteredMovies.push(movies);
                    }
                    this.movieService.setMovieList$(filteredMovies);
                });
            });
    }

    ngOnInit() {
        this.movieService.loadMoviesData();
        this.searchValue$ = this.movieService.getSearchValue$;
        this.movieList$ = this.movieService.movieList$;
    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }

    onSearch(value: string) {
        this.movieService.appendSearchValue(value);
    }

}
