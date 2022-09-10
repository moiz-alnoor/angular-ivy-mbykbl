import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ReactiveFormsModule} from '@angular/forms';
@NgModule({
  imports:      [ ReactiveFormsModule, MatAutocompleteModule, BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
