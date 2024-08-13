import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputContainerComponent } from './input-container.component';
import { StoreModule } from '@ngrx/store';
import { valueReducer } from '../../store/reducers/value.reducer';
import { DropdownInputComponent } from '../dropdown-input/dropdown-input.component';
import { TextInputComponent } from '../text-input/text-input.component';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

describe('InputContainerComponent', () => {
  let component: InputContainerComponent;
  let fixture: ComponentFixture<InputContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({ valueState: valueReducer }),
        FloatLabelModule,
        DropdownModule,
        FormsModule,
        ButtonModule
      ],
      declarations: [InputContainerComponent, DropdownInputComponent, TextInputComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InputContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
