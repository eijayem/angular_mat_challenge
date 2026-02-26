import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule, AbstractControl } from '@angular/forms';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MatChipsModule } from '@angular/material/chips';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'new-register',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule, MatToolbarModule, 
    MatStepperModule, MatCardModule, MatFormFieldModule, MatInputModule, 
    MatButtonModule, MatIconModule, MatDatepickerModule, MatNativeDateModule, 
    MatRadioModule, MatCheckboxModule, MatSliderModule, MatChipsModule, 
    MatSlideToggleModule, MatExpansionModule, MatDialogModule
  ],
  templateUrl: './new-register.html',
  styleUrl: './new-register.css'
})
export class NewRegister {
  isDarkMode = false;
  submitted = false;

  constructor(private dialog: MatDialog) {}

  ageValidator(control: AbstractControl) {
    if (!control.value) return null;
    const date = new Date(control.value);
    return date.getFullYear() <= 2006 ? null : { tooYoung: true };
  }

  passwordMatchValidator(group: AbstractControl) {
    const pass = group.get('password')?.value;
    const confirmPass = group.get('confirmPassword')?.value;
    return pass === confirmPass ? null : { passwordMismatch: true };
  }

  formdata = new FormGroup({
    accountInfo: new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z][a-zA-Z0-9]{7,}$/)
      ]),
      confirmPassword: new FormControl('', Validators.required)
    }, { validators: this.passwordMatchValidator }),
    
    personalInfo: new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      birthDate: new FormControl(null, [Validators.required, this.ageValidator]),
      gender: new FormControl('', Validators.required)
    }),
    
    additionalInfo: new FormGroup({
      skillLevel: new FormControl(5),
      agree: new FormControl(false, Validators.requiredTrue)
    })
  });

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
  }

  onReset(stepper: MatStepper | null) {
    const dialogRef = this.dialog.open(ConfirmDialog);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.formdata.reset();
        this.formdata.get('additionalInfo.skillLevel')?.setValue(5);
        if (stepper) stepper.reset();
      }
    });
  }

  onSubmit() {
    if (this.formdata.valid) {
      this.submitted = true;
    }
  }
}

@Component({
  selector: 'confirm-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  template: `
    <div class="beige-dialog-container">
      <h2 mat-dialog-title>Confirm Reset</h2>
      <mat-dialog-content>
        <p>Are you sure you want to clear all data? This will return you to the first step.</p>
      </mat-dialog-content>
      <mat-dialog-actions align="end">
        <button mat-button [mat-dialog-close]="false" class="cancel-btn">Cancel</button>
        <button mat-flat-button [mat-dialog-close]="true" class="confirm-btn">Reset Form</button>
      </mat-dialog-actions>
    </div>
  `,
  styles: [`
    .beige-dialog-container {
      background-color: #faf7f2;
      padding: 8px;
    }
    h2 {
      color: #5d4037 !important;
      font-weight: 600;
    }
    mat-dialog-content {
      color: #6d4c41 !important;
      font-size: 0.95rem;
    }
    .cancel-btn {
      color: #8d6e63 !important;
    }
    .confirm-btn {
      background-color: #a1887f !important;
      color: white !important;
    }
  `]
})
export class ConfirmDialog {}