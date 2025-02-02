import { createActionGroup, props } from "@ngrx/store";
import { Book } from "../book-list/model/books.model";

export const BooksActions = createActionGroup({
  source: 'Books',
  events: {
    'Add Book' : props<{ bookId: string}>(),
    'Remove Book' : props<{ bookId: string }>(),
  },
});

export const BooksApiActions = createActionGroup({
  source: 'Books API',
  events: {
    'Retreived Book List' : props<{ books: ReadonlyArray<Book> }>(),
  },
});

