import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Injector } from '@angular/core';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  // bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(AppComponent, { injector });
    customElements.define('sg-counter-component', el);
  }

  ngDoBootstrap() {}
}
