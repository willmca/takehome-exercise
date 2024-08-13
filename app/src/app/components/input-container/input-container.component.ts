import { Component } from '@angular/core';
import { INPUT_OPTIONS } from '../../constants/input.constant';
import { SelectItem } from 'primeng/api';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/model/app.state';



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
}


