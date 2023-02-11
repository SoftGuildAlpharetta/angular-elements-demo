import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Output() onValidationFailure = new EventEmitter<string>();
  counter: number = 0;
  @Input() initialCount;

  ngOnInit() {
    if (this.initialCount) {
      this.counter = this.initialCount;
    }
  }

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
      this.onValidationFailure.emit(target.value)
      target.value = this.counter.toString();
    }
  }
}
