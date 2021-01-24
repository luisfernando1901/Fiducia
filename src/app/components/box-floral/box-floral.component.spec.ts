import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxFloralComponent } from './box-floral.component';

describe('BoxFloralComponent', () => {
  let component: BoxFloralComponent;
  let fixture: ComponentFixture<BoxFloralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxFloralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxFloralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
