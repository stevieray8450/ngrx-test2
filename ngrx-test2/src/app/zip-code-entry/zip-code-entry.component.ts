import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { AddZipCode } from '../actions/zip-code.actions';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-zip-code-entry',
  templateUrl: './zip-code-entry.component.html',
  styleUrls: ['./zip-code-entry.component.scss']
})
export class ZipCodeEntryComponent implements OnInit {
  zipCodeEntryForm: FormGroup;

  constructor(private store: Store<State>, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.zipCodeEntryForm = this.formBuilder.group({
      zipCode: []
    });
  }

  addZipCode(): void {
    console.log(this.zipCodeEntryForm.get('zipCode').value);
    this.store.dispatch(new AddZipCode(this.zipCodeEntryForm.get('zipCode').value));
  }
}
