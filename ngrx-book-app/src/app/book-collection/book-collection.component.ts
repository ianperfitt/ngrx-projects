import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../book-list/model/books.model';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrl: './book-collection.component.css'
})
export class BookCollectionComponent {
  
  @Input() books: ReadonlyArray<Book> = [];
  @Output() remove = new EventEmitter<string>();
}
