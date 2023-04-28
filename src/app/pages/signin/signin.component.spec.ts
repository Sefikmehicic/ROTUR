import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninComponent } from './signin.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let page: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninComponent ],
      imports: [
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    page = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  describe('given form', () => {
    it('when email is empty, then recover password button should be disabled', () => {
      setEmail('');
  
      expect(recoverPasswordButton().disabled).toBeTruthy();
    })
  
    it('when email is invalid, then recover password button should be disabled', () => {
      setEmail('invalidEmail');
  
      expect(recoverPasswordButton().disabled).toBeTruthy();
    })
  
    it('when email is valid, then recover password button should be enabled', () => {
      setEmail('validemail@email.com');
  
      expect(recoverPasswordButton().disabled).toBeFalsy();
    })

    it('when email is empty, then login button should be disabled', () => {
      setEmail('');
      setPassword('anyPassword');
  
      expect(recoverLoginButton().disabled).toBeTruthy();
    })

    it('when email is invalid, then login button should be disabled', () => {
      setEmail('invalidEmail');
      setPassword('anyPassword');
  
      expect(recoverPasswordButton().disabled).toBeTruthy();
    })

    it('when password is empty, then login button should be disabled', () => {
      setEmail('validemail@email.com');
      setPassword('');
  
      expect(recoverLoginButton().disabled).toBeTruthy();
    })

    it('when password is not empty, then login button should be enabled', () => {
      setEmail('validemail@email.com');
      setPassword('anyPassword');
  
      expect(recoverLoginButton().disabled).toBeFalsy();
    })
  })

  function setEmail(value: string) {
    component.form.get('email')?.setValue(value);
    fixture.detectChanges();
  }

  function setPassword(value: string) {
    component.form.get('password')?.setValue(value);
    fixture.detectChanges();
  }

  function recoverPasswordButton() {
    return page.querySelector('[test-id="recover-password-button"]');
  }

  function recoverLoginButton() {
    return page.querySelector('[test-id="login-button"]');
  }

});