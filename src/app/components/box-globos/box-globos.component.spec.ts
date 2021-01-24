import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxGlobosComponent } from './box-globos.component';

describe('BoxGlobosComponent', () => {
  let component: BoxGlobosComponent;
  let fixture: ComponentFixture<BoxGlobosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxGlobosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxGlobosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
