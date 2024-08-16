import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Store, StoreModule } from '@ngrx/store';
import { Router } from '@angular/router';
import { TextInputComponent } from './text-input.component';
import { updateValue } from '../../store/actions/value.actions';
import { AppState } from '../../store/model/app.state';
import { valueReducer } from '../../store/reducers/value.reducer';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

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
      declarations: [TextInputComponent],
      imports: [
        StoreModule.forRoot({ valueState: valueReducer }),
        ButtonModule,
        FormsModule
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
});
