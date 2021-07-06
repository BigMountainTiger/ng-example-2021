import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-validation-builder',
  templateUrl: './form-validation-builder.component.html',
  styleUrls: ['./form-validation-builder.component.scss']
})
export class FormValidationBuilderComponent implements OnInit {

  public group = new FormGroup({});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.group = this.fb.group({
      firstName: [''],
      lastName: [''],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      }),
    });
  }

}
