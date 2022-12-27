import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjsCalendareComponent } from './ejs-calendare.component';

describe('EjsCalendareComponent', () => {
  let component: EjsCalendareComponent;
  let fixture: ComponentFixture<EjsCalendareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjsCalendareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjsCalendareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
