import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'sg-counter',
  templateUrl: './sg-counter.component.html',
  styleUrls: ['./sg-counter.component.scss'],
})
export class SgCounterComponent {
  @Output('numberValidationFailed') numberValidationFailure$ =
    new EventEmitter<string>();
  counter: number = 0;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  onTextInputChanged(event: Event) {
    const target = event.target as HTMLInputElement;
    const newValue = Number.parseInt(target.value);
    if (!Number.isNaN(newValue)) {
      this.counter = newValue;
    } else {
      this.numberValidationFailure$.emit(target.value);
      target.value = this.counter.toString();
    }
  }
}
