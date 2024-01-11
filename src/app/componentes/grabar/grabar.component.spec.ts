import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrabarComponent } from './grabar.component';

describe('GrabarComponent', () => {
  let component: GrabarComponent;
  let fixture: ComponentFixture<GrabarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrabarComponent]
    });
    fixture = TestBed.createComponent(GrabarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
