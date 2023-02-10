import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Injector } from '@angular/core';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { SgCounterComponent } from './sg-counter/sg-counter.component';

@NgModule({
  declarations: [AppComponent, SgCounterComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent, SgCounterComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(AppComponent, { injector });
    customElements.define('sg-counter-component', el);
  }

  ngDoBootstrap() {}
}
