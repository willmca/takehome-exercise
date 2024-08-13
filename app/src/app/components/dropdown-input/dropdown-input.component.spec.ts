import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Store, StoreModule } from '@ngrx/store';
import { DropdownInputComponent } from './dropdown-input.component';
import { updateValue } from '../../store/actions/value.actions';
import { AppState } from '../../store/model/app.state';
import { valueReducer } from '../../store/reducers/value.reducer';
import { SelectItem } from 'primeng/api';

describe('DropdownInputComponent', () => {
  let component: DropdownInputComponent;
  let fixture: ComponentFixture<DropdownInputComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownInputComponent ],
      imports: [
        StoreModule.forRoot({ valueState: valueReducer }) 
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownInputComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch updateValue action with correct value on dropdown change', () => {
    spyOn(store, 'dispatch');

    const testValue = 'test-dropdown-value';
    component.handleDropdownChange(testValue);

    expect(store.dispatch).toHaveBeenCalledWith(updateValue({ value: testValue }));
  });
});
