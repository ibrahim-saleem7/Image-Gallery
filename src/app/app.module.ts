import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PhotosComponent } from './components/photos/photos.component';
import { SearchComponent } from './components/search/search.component';
import { LightboxComponent } from './components/lightbox/lightbox.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    GalleryComponent,
    PhotosComponent,
    LightboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
