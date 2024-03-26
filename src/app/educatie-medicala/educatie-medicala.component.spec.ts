import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducatieMedicalaComponent } from './educatie-medicala.component';

describe('EducatieMedicalaComponent', () => {
  let component: EducatieMedicalaComponent;
  let fixture: ComponentFixture<EducatieMedicalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducatieMedicalaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducatieMedicalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
