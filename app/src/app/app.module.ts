import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutesModule } from './app.routes';
import { AppComponent } from './app.component';
import { DisplayComponent } from './components/display/display.component';
import { DropdownModule } from 'primeng/dropdown';
import { RouterOutlet } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputContainerComponent } from './components/input-container/input-container.component';
import { StoreModule } from '@ngrx/store';
import { valueReducer } from './store/reducers/value.reducer';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    InputContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutesModule,
    DropdownModule,
    RouterOutlet,
    BrowserAnimationsModule,
    FloatLabelModule,
    ButtonModule,
    StoreModule.forRoot({ valueState: valueReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
