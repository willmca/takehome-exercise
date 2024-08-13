import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../store/model/app.state';
import { selectCurrentValue } from '../../store/selectors/value.selectors';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrl: './display.component.scss'
})
export class DisplayComponent {
  public financialInputValue$: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.financialInputValue$ = this.store.select(selectCurrentValue);
  }
}
