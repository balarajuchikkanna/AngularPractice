import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  formValues = []

  submitForm(formData: any){
    console.log(formData.controls);
    this.formValues = formData.controls;
  }
}
