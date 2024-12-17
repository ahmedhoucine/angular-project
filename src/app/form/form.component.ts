import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  authForm!: FormGroup; 

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const control = this.authForm.get(fieldName);
    return control?.invalid && (control.dirty || control.touched) ? true : false; 
  }

  onSubmit() {
    if (this.authForm.valid) {
      console.log('Formulaire soumis avec succès', this.authForm.value);
      alert('Formulaire envoyé avec succès');
    }
  }
}
