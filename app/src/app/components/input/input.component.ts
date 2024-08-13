import { Component } from '@angular/core';
import { INPUT_OPTIONS, IS_INVALID_INPUT } from '../../constants/input.constant';
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
  public financialInputValueDropdown: string = '';
  public financialInputValueText: string = '';
  public isInvalidInput: boolean = false;


  public handleDropdownChange(value: string) {
    this.store.dispatch(updateValue({ value }));
  }

  public handleTextInputChange(event: Event) {
    this.isInvalidInput = IS_INVALID_INPUT((event?.target as HTMLInputElement).value);
  }
}


