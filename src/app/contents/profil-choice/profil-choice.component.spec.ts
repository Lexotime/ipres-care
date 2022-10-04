import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilChoiceComponent } from './profil-choice.component';

describe('ProfilChoiceComponent', () => {
  let component: ProfilChoiceComponent;
  let fixture: ComponentFixture<ProfilChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilChoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
