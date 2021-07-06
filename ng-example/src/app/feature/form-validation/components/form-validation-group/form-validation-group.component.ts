import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-validation-group',
  templateUrl: './form-validation-group.component.html',
  styleUrls: ['./form-validation-group.component.scss']
})
export class FormValidationGroupComponent implements OnInit {

  public group = new FormGroup({});
  
  constructor() { }

  ngOnInit(): void {
    this.group = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        zip: new FormControl('')
      })
    });
  }

  public updateGroup() {
    this.group.patchValue({
      firstName: 'Song',
      address: {
        street: '12345 Whatever Street'
      }
    });
  }

  public clearGroup() {
    this.group.patchValue({
      firstName: '',
      lastName: '',
      address: {
        street: '',
        city: '',
        state: '',
        zip: ''
      }
    });
  }

  public onSubmit(): boolean {
    return false;
  }

}
