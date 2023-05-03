import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmovieboxComponent } from './amoviebox.component';

describe('AmovieboxComponent', () => {
  let component: AmovieboxComponent;
  let fixture: ComponentFixture<AmovieboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmovieboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmovieboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
