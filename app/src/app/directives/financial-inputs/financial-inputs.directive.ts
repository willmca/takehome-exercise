import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { includes, isNil } from 'lodash-es';
import { ERROR_MESSAGE } from '../../constants/display.constant';

@Directive({
  selector: '[financialInput]'
})
export class FinancialInputsDirective {

  // regex to allow for 3 digits prior to decimal, 2 digits after, an only end in k m or b
  private regex: RegExp = new RegExp(/^\d{0,3}(\.\d{0,2})?[kmbt]?$/i);
  // List of special keys to allow outside of allowed regex
  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Delete'];
  private errorElement!: HTMLElement;
  private isErrorElementPresent: boolean;

  constructor(private hostElement: ElementRef, private renderer: Renderer2) {
    this.isErrorElementPresent = false;
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    // Do not do anything if the key is a special key 
    if (includes(this.specialKeys, event.key)) {
      return;
    }
    const currentValue: string = this.hostElement.nativeElement.value;
    const valueAfterKeydown: string = currentValue.concat(event.key);
    // If the value after the keydown event doesnt match the allowed regex, block it
    this.removeErrorMessage();
    if (!valueAfterKeydown.match(this.regex)) {
      this.displayErrorMessage(ERROR_MESSAGE);
      event.preventDefault();
    }
  }

  @HostListener('paste', ['$event'])
  handlePaste(event: ClipboardEvent) {
    // Get the text from the paste event
    let clipboardData = event.clipboardData || (window as any).clipboardData;
    let pastedInput = clipboardData.getData('text');
    // Allow it if the pasted text matches the regex. If not, block it
    this.removeErrorMessage();
    if (!this.regex.test(pastedInput)) {
      this.displayErrorMessage(ERROR_MESSAGE);
      event.preventDefault();
    }
  }

  @HostListener('input', ['$event'])
  // This is specifically to handle input events where a browser suggests text, these have no inputType
  handleInput(event: any) {
    if (isNil(event.inputType)) {
      let inputValue = event?.target?.value;
      // Allow it if the pasted text matches the regex. If not, block it
      this.removeErrorMessage();
      if (!this.regex.test(inputValue)) {
        // event.preventDefault wasn't working, so just manually setting value to empty string
        this.displayErrorMessage(ERROR_MESSAGE);
        this.hostElement.nativeElement.value = '';
      }
    }
  }

  private displayErrorMessage(errorText: string): void {
    if (!this.isErrorElementPresent) {
      this.isErrorElementPresent = true;
      this.errorElement = this.renderer.createElement('div');
      this.errorElement.classList.add('error-content');
      this.errorElement.innerHTML = errorText;

      const parentElement: HTMLElement = this.hostElement.nativeElement.parentNode;
      const nextSiblingElement: HTMLElement = this.hostElement.nativeElement.nextSibling;
      if (nextSiblingElement) {
        this.renderer.insertBefore(parentElement, this.errorElement, nextSiblingElement);
      } else {
        this.renderer.appendChild(parentElement, this.errorElement);
      }
    }
  }

  private removeErrorMessage(): void {
    const parentElement: HTMLElement = this.hostElement.nativeElement.parentNode;
    if (this.isErrorElementPresent) {
      this.renderer.removeChild(parentElement, this.errorElement)
      this.isErrorElementPresent = false;
    }
  }
}
