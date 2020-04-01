import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteauthorComponent } from './quoteauthor.component';

describe('QuoteauthorComponent', () => {
  let component: QuoteauthorComponent;
  let fixture: ComponentFixture<QuoteauthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteauthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteauthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
