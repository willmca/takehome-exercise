import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/model/app.state';
import { updateValue } from '../../store/actions/value.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss'
})
export class TextInputComponent {
  constructor(private store: Store<AppState>, public router: Router
  ) { }
  public financialInputValueText!: string;

  public handleSubmit(): void {
    this.store.dispatch(updateValue({ value: this.financialInputValueText }));
    this.router.navigate(['./display']);
  }
}
