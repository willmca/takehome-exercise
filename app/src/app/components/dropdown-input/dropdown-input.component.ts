import { Component, Input, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { AppState } from '../../store/model/app.state';
import { Store } from '@ngrx/store';
import { updateValue } from '../../store/actions/value.actions';

@Component({
  selector: 'app-dropdown-input',
  templateUrl: './dropdown-input.component.html',
  styleUrl: './dropdown-input.component.scss'
})
export class DropdownInputComponent implements OnInit {
  constructor(private store: Store<AppState>
  ) { }
  public financialInputValueDropdown: string = '';
  @Input() public inputOptions!: SelectItem[];
  // i know this should have a type but i was running low on time and wanted it to work
  @Input() public financialInputValue!: any;

  public ngOnInit(): void {
    this.financialInputValueDropdown = this.financialInputValue;
  }

  public handleDropdownChange(value: string) {
    this.store.dispatch(updateValue({ value }));
  }
}
