import { Component, Input } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { GET_VALUE_FROM_LABEL, IS_VALID_INPUT } from '../../constants/input.constant';
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
  public financialInputValueText: string = '';
  public isValidInput: boolean = false;
  public showErrorMessage: boolean = false;
  @Input() public inputOptions!: SelectItem[];

  public handleTextInputChange(event: Event) {
    this.isValidInput = IS_VALID_INPUT((event?.target as HTMLInputElement).value);
  }

  public handleToggleErrorMessage(): void {
    this.showErrorMessage = !IS_VALID_INPUT(this.financialInputValueText)
  }

  public handleSubmit(): void {
    const value = this.financialInputValueText;
    this.store.dispatch(updateValue({ value: GET_VALUE_FROM_LABEL(value) }));
    this.router.navigate(['display'])
  }
}
