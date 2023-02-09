import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Output('numberValidationFailed') numberValidationFailure$ = new EventEmitter<string>();
  counter: number = 0;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  onTextInputChanged(event: Event) {
    const target = event.target as HTMLInputElement;
    try {
      const newValue = Number.parseInt(target.value);
      if (Number.isNaN(newValue)) {
        throw new Error("Not a number!");
      }
      this.counter = newValue;
    } catch (ex) {
      console.error(ex);
      this.numberValidationFailure$.emit(target.value);
      target.value = this.counter.toString();
    }
  }
}
