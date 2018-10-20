import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipCodeEntryComponent } from './zip-code-entry.component';

describe('ZipCodeEntryComponent', () => {
  let component: ZipCodeEntryComponent;
  let fixture: ComponentFixture<ZipCodeEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZipCodeEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipCodeEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
