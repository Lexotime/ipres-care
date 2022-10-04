import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilCheckComponent } from './profil-check.component';

describe('ProfilCheckComponent', () => {
  let component: ProfilCheckComponent;
  let fixture: ComponentFixture<ProfilCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
