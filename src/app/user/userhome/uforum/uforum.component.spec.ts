import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UforumComponent } from './uforum.component';

describe('UforumComponent', () => {
  let component: UforumComponent;
  let fixture: ComponentFixture<UforumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UforumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UforumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
