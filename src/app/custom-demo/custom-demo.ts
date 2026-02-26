import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-demo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './custom-demo.html',
  styleUrls: ['./custom-demo.css']
})
export class CustomDemo {
  title = 'Custom Profile Setup';
  customForm: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.customForm = this.fb.group({
      fullName: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      dob: ['', Validators.required],
      department: ['', Validators.required],
      accountType: ['', Validators.required],
      newsletter: [false],
      bio: ['', [Validators.required, Validators.maxLength(200)]]
    });
  }

  onCustomSubmit() {
    this.isSubmitted = true;
    if (this.customForm.valid) {
      console.log('Custom Data:', this.customForm.value);
      alert('Custom Profile Saved!');
    } else {
      this.customForm.markAllAsTouched();
    }
  }
}
