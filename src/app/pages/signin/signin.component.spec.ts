import { Location } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninComponent } from './signin.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BlankComponent } from '../mocks/blank/blank.component';
import { Subject } from 'rxjs';
import { AuthenticationService } from './services/authentication.service';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let page: any;
  let location: Location;
  let authenticationService: AuthenticationServiceMock;

  beforeEach(async () => {
    authenticationService = new AuthenticationServiceMock();

    await TestBed.configureTestingModule({
      declarations: [SigninComponent],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([
          {
            path: '', component: BlankComponent
          }
        ])
      ]
    })
      .overrideProvider(AuthenticationService, { useValue: authenticationService })
      .compileComponents();

    fixture = TestBed.createComponent(SigninComponent);
    location = TestBed.inject(Location);

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

      expect(LoginButton().disabled).toBeTruthy();
    })

    it('when email is invalid, then login button should be disabled', () => {
      setEmail('invalidEmail');
      setPassword('anyPassword');

      expect(recoverPasswordButton().disabled).toBeTruthy();
    })

    it('when password is empty, then login button should be disabled', () => {
      setEmail('validemail@email.com');
      setPassword('');

      expect(LoginButton().disabled).toBeTruthy();
    })

    it('when password is not empty, then login button should be enabled', () => {
      setEmail('validemail@email.com');
      setPassword('anyPassword');

      expect(LoginButton().disabled).toBeFalsy();
    })
  })

  describe('Login flow', () => {

    describe('given user clicks on login button', () => {

      beforeEach(() => {
        setEmail('validemail@email.com');
        setPassword('anyPassword');
        LoginButton().click();
        fixture.detectChanges();
      })

      it('then show login loader', () => {
        expect(LoginLoader()).not.toBeNull();
      })

      it('then hide login button', () => {
        expect(LoginButton()).toBeNull();
      })

      describe('when login is succesful', () => {

        beforeEach(() => {
          authenticationService._signInRespone.next({ id: "anyUserId" });
        })

        it('then go to home page', done => {
          setTimeout(() => {
            expect(location.path()).toEqual('/');
            done();
          }, 100)
        })
      })

      describe('when login fails', () => {

        beforeEach(() => {
          authenticationService._signInRespone.error({message: "anyError"});
          fixture.detectChanges();
        })

        it('then do not go to home page', done => {
          setTimeout(() => {
            expect(location.path()).not.toEqual('/');
            done();
          }, 100)
        })

        it('then hide login loader', () => {
          expect(LoginLoader()).toBeNull();
        })

        it('then show login button', () => {
          expect(LoginButton()).not.toBeNull();
        })

        it('then show error message', () => {
          expect(page.querySelector('[test-id="login-error-message"]')).not.toBeNull();
        })
      })
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

  function LoginButton() {
    return page.querySelector('[test-id="login-button"]');
  }

  function LoginLoader() {
    return page.querySelector('[test-id="login-loader"]');
  }
});

class AuthenticationServiceMock {
  _signInRespone = new Subject();
  signIn() {
    return this._signInRespone.asObservable();
  }
}
