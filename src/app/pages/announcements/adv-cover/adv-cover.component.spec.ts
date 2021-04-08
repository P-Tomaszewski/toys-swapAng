import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvCoverComponent } from './adv-cover.component';

describe('AdvCoverComponent', () => {
  let component: AdvCoverComponent;
  let fixture: ComponentFixture<AdvCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvCoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
