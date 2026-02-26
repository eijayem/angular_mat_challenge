import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-demo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-demo.html',
  styleUrls: ['./reactive-demo.css']
})
export class ReactiveDemo {
  title = 'Reactive Form Demo';
  userForm: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required],
      gender: ['', Validators.required],
      status: ['', Validators.required],
      comments: ['']
    });
  }

  onSubmit() {
    this.isSubmitted = true;

    if (this.userForm.valid) {
      console.log('Reactive Form Data:', this.userForm.value);
      alert('Data Captured via Reactive Form!');
    } else {
      this.userForm.markAllAsTouched();
    }
  }
}
