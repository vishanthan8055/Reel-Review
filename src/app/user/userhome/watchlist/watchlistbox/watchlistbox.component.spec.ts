import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlistboxComponent } from './watchlistbox.component';

describe('WatchlistboxComponent', () => {
  let component: WatchlistboxComponent;
  let fixture: ComponentFixture<WatchlistboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchlistboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchlistboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
