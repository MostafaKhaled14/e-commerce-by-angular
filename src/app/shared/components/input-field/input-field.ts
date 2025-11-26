import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input-field.html',
})
export class InputFieldComponent {
  @Input() form!: FormGroup;
  @Input() name!: string;
  @Input() label!: string;
  @Input() type: string = 'text';

  get control(): FormControl {
    return this.form.get(this.name) as FormControl;
  }

  get errorMessage(): string | null {
    if (!this.control) return null;
    if (this.control.hasError('required')) return `${this.label} is required`;
    if (this.control.hasError('email')) return `Invalid email format`;
    if (this.control.hasError('minlength')) {
      const requiredLength = this.control.getError('minlength').requiredLength;
      const actualLength = this.control.getError('minlength').actualLength;
      return `${this.label} must be at least ${requiredLength} characters (currently ${actualLength})`;
    }
    if (this.control.getError('passwordStrength'))
      return `${this.label} Must start with a capital letter`;
    if (this.control.getError('invalidPhone')) return `Invalid Egyptian phone number`;
    if (this.control.getError('mismatch')) return `Password does not match`;

    return null;
  }
}
