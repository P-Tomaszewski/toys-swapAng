import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvDetailsComponent } from './adv-details.component';

describe('AdDetailsComponent', () => {
  let component: AdvDetailsComponent;
  let fixture: ComponentFixture<AdvDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
