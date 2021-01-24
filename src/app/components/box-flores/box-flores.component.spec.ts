import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxFloresComponent } from './box-flores.component';

describe('BoxFloresComponent', () => {
  let component: BoxFloresComponent;
  let fixture: ComponentFixture<BoxFloresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxFloresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxFloresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
