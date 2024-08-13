import { Component } from '@angular/core';
import { INPUT_OPTIONS } from '../../constants/input.constant';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  constructor() {

  }

  public inputOptions: SelectItem[] = INPUT_OPTIONS

  public handleDropdownChange(value: string) {
    console.log(value);
  }
}
