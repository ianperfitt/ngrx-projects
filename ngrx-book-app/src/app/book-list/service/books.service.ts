import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Book } from "../model/books.model";
import { Observable, map } from "rxjs";

@Injectable({ providedIn: 'root'})
export class GoogleBooksService {

  http = inject(HttpClient);

  getBooks(): Observable<Array<Book>> {
    return this.http
      .get<{ items: Book[] }>(
        'https://www.googleapis.com/books/v1/volumes?' +
        'maxResults=5&orderBy=relevance&q=oliver%20sacks'
      )
      .pipe(map((books) => books.items || []));
  }
}