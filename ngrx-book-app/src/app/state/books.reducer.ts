import { createReducer, on } from "@ngrx/store";
import { BooksApiActions } from "./books.actions";
import { Book } from "../book-list/model/books.model";

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(BooksApiActions.retreivedBookList, (_state, { books }) => books)
)