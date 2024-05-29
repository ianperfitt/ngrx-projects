import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { collectionReducer } from './state/collection.reducer';
import { booksReducer } from './state/books.reducer';
import { BookListComponent } from './book-list/component/book-list.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookCollectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // registers the global providers needed to access the Store throughout app
    StoreModule.forRoot({books: booksReducer, collection: collectionReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(
      withFetch(),
    ),
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
