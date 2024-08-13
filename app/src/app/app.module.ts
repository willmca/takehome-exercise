import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutesModule } from './app.routes';
import { AppComponent } from './app.component';
import { DisplayComponent } from './components/display/display.component';
import { DropdownModule } from 'primeng/dropdown';
import { RouterOutlet } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputComponent } from './components/input/input.component';
import { StoreModule } from '@ngrx/store';
import { valueReducer } from './store/reducers/value.reducer';
import { FloatLabelModule } from 'primeng/floatlabel';
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
    BrowserAnimationsModule,
    FloatLabelModule,
    StoreModule.forRoot({ valueState: valueReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
