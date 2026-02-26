import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRegister } from './new-register';

describe('NewRegister', () => {
  let component: NewRegister;
  let fixture: ComponentFixture<NewRegister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewRegister]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewRegister);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
