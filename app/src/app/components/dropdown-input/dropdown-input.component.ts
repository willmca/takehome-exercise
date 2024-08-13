import { Component, Input } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { AppState } from '../../store/model/app.state';
import { Store } from '@ngrx/store';
import { updateValue } from '../../store/actions/value.actions';

@Component({
  selector: 'app-dropdown-input',
  templateUrl: './dropdown-input.component.html',
  styleUrl: './dropdown-input.component.scss'
})
export class DropdownInputComponent {
  constructor(private store: Store<AppState>
  ) { }
  public financialInputValueDropdown: string = '';
  @Input() public inputOptions!: SelectItem[];

  public handleDropdownChange(value: string) {
    this.store.dispatch(updateValue({ value }));
  }
}
