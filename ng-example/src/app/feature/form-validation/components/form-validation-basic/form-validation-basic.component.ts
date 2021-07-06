import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-validation-basic',
  templateUrl: './form-validation-basic.component.html',
  styleUrls: ['./form-validation-basic.component.scss']
})
export class FormValidationBasicComponent implements OnInit {

  public name = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  public setName(v: string) {
    this.name.setValue(v);
  }
}
