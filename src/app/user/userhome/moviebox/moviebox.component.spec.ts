import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieboxComponent } from './moviebox.component';

describe('MovieboxComponent', () => {
  let component: MovieboxComponent;
  let fixture: ComponentFixture<MovieboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
