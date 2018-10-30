import {Component, Input} from '@angular/core';
import {IMovieResults} from '../../models/movie.model';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.scss']
})

export class MovieListComponent {
    @Input() movies: Observable<IMovieResults[]>;
    public displayedColumns = ['title', 'description', 'date'];

    constructor() {
    }
}
