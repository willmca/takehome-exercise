import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutesModule } from './app.routes'; 
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { InputComponent } from './input/input.component';
import { DropdownModule } from 'primeng/dropdown';
import { RouterOutlet } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutesModule, 
    DropdownModule,
    RouterOutlet,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
