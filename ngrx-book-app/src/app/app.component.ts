import { Component, OnInit, inject } from '@angular/core';
import { selectBookCollection, selectBooks } from './state/books.selectors';
import { GoogleBooksService } from './book-list/service/books.service';
import { Store } from '@ngrx/store';
import { BooksActions, BooksApiActions } from './state/books.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{

  private booksService = inject(GoogleBooksService);
  private store = inject(Store);

  ngOnInit(): void {
    this.booksService
    .getBooks()
    .subscribe((books) => 
    this.store.dispatch(BooksApiActions.retreivedBookList({ books }))
  );
  }
  
  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }
}