import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomaineChoiceComponent } from './domaine-choice.component';

describe('DomaineChoiceComponent', () => {
  let component: DomaineChoiceComponent;
  let fixture: ComponentFixture<DomaineChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomaineChoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomaineChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
