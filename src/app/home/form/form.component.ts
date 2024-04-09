import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form class="form-container" [formGroup]="formGroup" (ngSubmit)="addMoto()">
      <input type="text" placeholder="Make" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <button type="submit">SUBMIT</button>
    </form>
  `,
  styles: `.form-container {
  height: 69.9vh;
  width: 100%;
}
`,
})
export default class FormComponent {
  private fb = inject(FormBuilder);

  formGroup = this.fb.group({
    make: '',
    model: '',
  });

  addMoto() {
    throw new Error('Method not implemented.');
  }
}
