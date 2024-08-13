import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { DisplayComponent } from './display.component';
import { AppState } from '../../store/model/app.state';
import { valueReducer } from '../../store/reducers/value.reducer';
import { selectCurrentValue } from '../../store/selectors/value.selectors';

describe('DisplayComponent', () => {
  let component: DisplayComponent;
  let fixture: ComponentFixture<DisplayComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayComponent],
      imports: [
        StoreModule.forRoot({ valueState: valueReducer }) // Provide the reducer
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DisplayComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
