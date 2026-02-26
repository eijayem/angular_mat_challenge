import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-demo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-demo.html',
  styleUrls: ['./template-demo.css']
})

export class TemplateDemo {
  title = 'Template-Driven Form';

  user = {
    username: '',
    email: '',
    password: '',
    role: '',
    gender: '',   // Field 1: Radio Buttons
    status: '',   // Field 2: Permanent/Probationary
    comments: ''  // Field 3: Notes
  };

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted!', this.user);
      alert('Data Captured Successfully!');
    }
  }
}

