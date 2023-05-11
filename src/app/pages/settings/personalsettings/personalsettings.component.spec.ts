import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalsettingsComponent } from './personalsettings.component';

describe('PersonalsettingsComponent', () => {
  let component: PersonalsettingsComponent;
  let fixture: ComponentFixture<PersonalsettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalsettingsComponent]
    });
    fixture = TestBed.createComponent(PersonalsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
