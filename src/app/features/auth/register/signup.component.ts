import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { InputFieldComponent } from '../../../shared/components/input-field/input-field';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, InputFieldComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent implements OnInit {
  loading = false;
  errorMessage = '';
  signupForm;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.signupForm = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8), this.passwordValidator]],
        rePassword: ['', [Validators.required]],
        phone: ['', [Validators.required, this.egyptianPhoneValidator]],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/']);
    }
  }

  onSubmit(): void {
    if (this.signupForm.invalid) return;
    this.loading = true;
    this.errorMessage = '';

    const { name, email, password, rePassword, phone } = this.signupForm.value;

    this.authService.signup(name!, email!, password!, rePassword!, phone!).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage = err.message || 'Sign up failed. Please try again.';
      },
    });
  }

  // Custom Validators
  passwordValidator(control: any) {
    const value = control.value;
    if (!value) return null;
    const hasUpperCase = /^[A-Z].*$/.test(value);
    return hasUpperCase ? null : { passwordStrength: true };
  }

  egyptianPhoneValidator(control: any) {
    const value = control.value;
    if (!value) return null;
    const egyptianRegex = /^01[0125][0-9]{8}$/;
    return egyptianRegex.test(value) ? null : { invalidPhone: true };
  }

  passwordMatchValidator(group: any) {
    const passControl = group.get('password');
    const rePassControl = group.get('rePassword');
    if (!passControl || !rePassControl) return null;
    const mismatch = passControl.value !== rePassControl.value;
    if (mismatch) {
      rePassControl.setErrors({ ...(rePassControl.errors || {}), mismatch: true });
    } else {
      if (rePassControl.errors) {
        const { mismatch, ...rest } = rePassControl.errors;
        rePassControl.setErrors(Object.keys(rest).length ? rest : null);
      }
    }
    return mismatch ? { mismatch: true } : null;
  }
}
