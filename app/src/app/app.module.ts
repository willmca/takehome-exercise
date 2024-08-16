import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutesModule } from './app.routes';
import { AppComponent } from './app.component';
import { DisplayComponent } from './components/display/display.component';
import { RouterOutlet } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { valueReducer } from './store/reducers/value.reducer';
import { ButtonModule } from 'primeng/button';
import { TextInputComponent } from './components/text-input/text-input.component';
import { DirectivesModule } from './directives/directives.module';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    TextInputComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutesModule,
    RouterOutlet,
    ButtonModule,
    StoreModule.forRoot({ valueState: valueReducer }),
    DirectivesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
