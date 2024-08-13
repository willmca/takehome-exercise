import { Component } from '@angular/core';
import { INPUT_OPTIONS } from '../../constants/input.constant';
import { SelectItem } from 'primeng/api';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/model/app.state';
import { updateValue } from '../../store/actions/value.actions';



@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  constructor(private store: Store<AppState>
  ) {
  }

  public inputOptions: SelectItem[] = INPUT_OPTIONS
  public financialInputValue: string = '';

  public handleDropdownChange(value: string) {
    this.store.dispatch(updateValue({ value }));
  }
}


