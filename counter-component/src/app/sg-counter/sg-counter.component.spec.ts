import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SgCounterComponent } from './sg-counter.component';

describe('SgCounterComponent', () => {
  let component: SgCounterComponent;
  let fixture: ComponentFixture<SgCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SgCounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SgCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
