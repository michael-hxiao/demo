import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWidgetComponent } from './star-widget.component';

describe('StarWidgetComponent', () => {
  let component: StarWidgetComponent;
  let fixture: ComponentFixture<StarWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
