import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Store, StoreModule } from '@ngrx/store';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { TextInputComponent } from './text-input.component';
import { updateValue } from '../../store/actions/value.actions';
import { AppState } from '../../store/model/app.state';
import { valueReducer } from '../../store/reducers/value.reducer';
import { GET_VALUE_FROM_LABEL, IS_VALID_INPUT } from '../../constants/input.constant';

// Mock router
class MockRouter {
  navigate(params: any) { }
}

describe('TextInputComponent', () => {
  let component: TextInputComponent;
  let fixture: ComponentFixture<TextInputComponent>;
  let store: Store<AppState>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextInputComponent ],
      imports: [
        StoreModule.forRoot({ valueState: valueReducer }) // Provide the reducer
      ],
      providers: [
        { provide: Router, useClass: MockRouter }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextInputComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate input correctly on text input change', () => {
    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    inputElement.value = 'test value';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.isValidInput).toBe(IS_VALID_INPUT('test value'));
  });

  it('should toggle error message visibility correctly', () => {
    component.financialInputValueText = 'invalid value';
    component.handleToggleErrorMessage();
    fixture.detectChanges();
    expect(component.showErrorMessage).toBe(!IS_VALID_INPUT('invalid value'));
  });

  it('should dispatch updateValue action and navigate on submit', () => {
    spyOn(store, 'dispatch');
    spyOn(router, 'navigate');
    component.financialInputValueText = 'test value';
    const expectedValue = GET_VALUE_FROM_LABEL('test value');
    component.handleSubmit();    
    expect(store.dispatch).toHaveBeenCalledWith(updateValue({ value: expectedValue }));
    expect(router.navigate).toHaveBeenCalledWith(['display']);
  });
});
