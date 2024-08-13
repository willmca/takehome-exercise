import { Component } from '@angular/core';
import { INPUT_OPTIONS, IS_VALID_INPUT } from '../../constants/input.constant';
import { SelectItem } from 'primeng/api';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/model/app.state';
import { updateValue } from '../../store/actions/value.actions';



@Component({
  selector: 'app-input',
  templateUrl: './input-container.component.html',
  styleUrl: './input-container.component.scss'
})
export class InputContainerComponent {
  constructor(private store: Store<AppState>
  ) {
  }

  public inputOptions: SelectItem[] = INPUT_OPTIONS
  public financialInputValueDropdown: string = '';
  public financialInputValueText: string = '';
  public isValidInput: boolean = false;
  public showErrorMessage: boolean = false;

  public handleDropdownChange(value: string) {
    this.store.dispatch(updateValue({ value }));
  }

  public handleTextInputChange(event: Event) {
    this.isValidInput = IS_VALID_INPUT((event?.target as HTMLInputElement).value);
  }

  public handleToggleErrorMessage(): void {
    this.showErrorMessage = !IS_VALID_INPUT(this.financialInputValueText)
  }
}


