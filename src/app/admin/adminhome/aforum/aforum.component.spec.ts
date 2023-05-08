import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AforumComponent } from './aforum.component';

describe('AforumComponent', () => {
  let component: AforumComponent;
  let fixture: ComponentFixture<AforumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AforumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AforumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
