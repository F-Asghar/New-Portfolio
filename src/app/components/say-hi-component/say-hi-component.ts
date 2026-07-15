import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-say-hi-component',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule, TranslatePipe, ReactiveFormsModule],
  templateUrl: './say-hi-component.html',
  styleUrl: './say-hi-component.scss',
})
export class SayHiComponent {
  http = inject(HttpClient);
  successMessage = false;

  constructor(private router: Router) {}

  /**
   * Navigates to the privacy policy page and scrolls to the top of the window.
   */
  goToPrivacyPolicy() {
    this.router.navigate(['/privacy-policy']).then(() => {
      window.scrollTo(0, 0);
    });
  }

  /**
   * Form group definition with validation rules for name, email, message, and privacy policy.
   */
  userForm = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required],
    }),
    email: new FormControl('', {
      validators: [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
      ],
    }),
    message: new FormControl('', {
      validators: [Validators.required, Validators.minLength(4)],
    }),
    privacyPolicy: new FormControl(false, {
      validators: [Validators.requiredTrue],
    }),
  });

  /**
   * Submits the form data to the server via HTTP POST if the form is valid.
   * On success, it displays a success message and resets the form fields.
   */
  formSubmit() {
    if (this.userForm.valid) {
      this.http.post('https://f-asghar.de/sendMail.php', this.userForm.value).subscribe({
        next: (response) => {
          console.log('Server Antwort:', response);
          this.showSuccess();
          this.userForm.reset();
        },
        error: (error) => {
          console.error('Fehler beim Senden:', error);
        },
      });
    }
  }

  /**
   * Displays a success message temporarily for 3 seconds.
   */
  showSuccess = () => {
    this.successMessage = true;
    setTimeout(() => {
      this.successMessage = false;
    }, 3000);
  };

  /**
   * Marks all form fields as touched to trigger validation error messages if the form is invalid.
   */
  handleDisabledClick() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
    }
  }
}
