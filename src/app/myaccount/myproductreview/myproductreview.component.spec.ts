import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyproductreviewComponent } from './myproductreview.component';

describe('MyproductreviewComponent', () => {
  let component: MyproductreviewComponent;
  let fixture: ComponentFixture<MyproductreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyproductreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyproductreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
