import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyuseComponent } from './companyuse.component';

describe('CompanyuseComponent', () => {
  let component: CompanyuseComponent;
  let fixture: ComponentFixture<CompanyuseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyuseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
