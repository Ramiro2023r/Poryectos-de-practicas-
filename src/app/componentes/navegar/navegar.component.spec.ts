import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegarComponent } from './navegar.component';

describe('NavegarComponent', () => {
  let component: NavegarComponent;
  let fixture: ComponentFixture<NavegarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavegarComponent]
    });
    fixture = TestBed.createComponent(NavegarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
