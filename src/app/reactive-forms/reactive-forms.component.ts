import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent implements OnInit {
  public cadastroForm: FormGroup = this.formBuilder.group({
    firstName: ['',[Validators.required,Validators.minLength(5)]],
    lastName: ['']
  })
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  public submitForm() {
    if(this.cadastroForm.valid){
      console.log(this.cadastroForm.value)
      console.log(this.cadastroForm.get('firstName')?.value)
    }
  }
}
