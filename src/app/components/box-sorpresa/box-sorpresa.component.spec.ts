import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxSorpresaComponent } from './box-sorpresa.component';

describe('BoxSorpresaComponent', () => {
  let component: BoxSorpresaComponent;
  let fixture: ComponentFixture<BoxSorpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxSorpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxSorpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
