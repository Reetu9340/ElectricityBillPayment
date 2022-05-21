import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateElectricityBillComponent } from './create-electricity-bill.component';

describe('CreateElectricityBillComponent', () => {
  let component: CreateElectricityBillComponent;
  let fixture: ComponentFixture<CreateElectricityBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateElectricityBillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateElectricityBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
