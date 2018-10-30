import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {MatTableModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BoardComponent} from './components/board/board.component';
import {SearchComponent} from './components/search/search.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MovieListComponent} from './components/movie-list/movie-list.component';

@NgModule({
    declarations: [
        AppComponent,
        BoardComponent,
        SearchComponent,
        MovieListComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        MatTableModule,
        HttpClientModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
