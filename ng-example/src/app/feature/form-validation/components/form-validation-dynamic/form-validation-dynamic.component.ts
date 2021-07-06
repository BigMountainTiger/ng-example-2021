import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation-dynamic',
  templateUrl: './form-validation-dynamic.component.html',
  styleUrls: ['./form-validation-dynamic.component.scss']
})
export class FormValidationDynamicComponent implements OnInit {

  public group = this.fb.group({
    aliases: this.fb.array([
      this.fb.control('', Validators.required)
    ])
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {}

  public get aliases() {
    return this.group.get('aliases') as FormArray;
  }

  public addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  public removeAlias(index: number) {
    this.aliases.removeAt(index);
  }
}
