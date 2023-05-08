import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CboxComponent } from './cbox.component';

describe('CboxComponent', () => {
  let component: CboxComponent;
  let fixture: ComponentFixture<CboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
