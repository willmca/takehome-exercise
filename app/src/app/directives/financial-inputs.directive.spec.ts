import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FinancialInputsDirective } from './financial-inputs.directive';

@Component({
  template: `<input type="text" financialInput />`
})
class TestComponent {}

describe('FinancialInputsDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let inputElement: HTMLInputElement;
  let directive: FinancialInputsDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, FinancialInputsDirective]
    });

    fixture = TestBed.createComponent(TestComponent);
    inputElement = fixture.debugElement.query(By.directive(FinancialInputsDirective)).nativeElement;
    directive = fixture.debugElement.query(By.directive(FinancialInputsDirective)).injector.get(FinancialInputsDirective);
    fixture.detectChanges();
  });

  it('should block invalid input on keydown', () => {
    const event = new KeyboardEvent('keydown', { key: 'a' });
    spyOn(event, 'preventDefault');
    inputElement.dispatchEvent(event);
    expect(event.preventDefault).toHaveBeenCalled();
  });

  it('should allow valid input on keydown', () => {
    const event = new KeyboardEvent('keydown', { key: '1' });
    spyOn(event, 'preventDefault');
    inputElement.dispatchEvent(event);
    expect(event.preventDefault).not.toHaveBeenCalled();
  });

  it('should block invalid paste input', () => {
    const event = new ClipboardEvent('paste', { clipboardData: new DataTransfer() });
    spyOn(event, 'preventDefault');
    (event.clipboardData as DataTransfer).setData('text', 'zzz');
    inputElement.dispatchEvent(event);
    expect(event.preventDefault).toHaveBeenCalled();
  });

  it('should allow valid paste input', () => {
    const event = new ClipboardEvent('paste', { clipboardData: new DataTransfer() });
    spyOn(event, 'preventDefault');
    (event.clipboardData as DataTransfer).setData('text', '123.45k');
    inputElement.dispatchEvent(event);
    expect(event.preventDefault).not.toHaveBeenCalled();
  });

  // Test for input event
  xit('should clear value if it does not match the regex on input', () => {
    const event: any = new Event('input');
    event.target.value = 'zzz';
    spyOnProperty(event, 'inputType').and.returnValue(null);
    inputElement.dispatchEvent(event);
    fixture.detectChanges();
    alert(inputElement); 
    expect(inputElement.value).toBe('');
  });

  xit('should not clear value if it matches the regex on input', () => {
    const event: any = new Event('input');
    (event.target as HTMLInputElement).value = '123.45k';
    spyOnProperty(event, 'inputType').and.returnValue(null);
    inputElement.dispatchEvent(event);
    fixture.detectChanges();
    expect(inputElement.value).toBe('123.45k');
  });
});
