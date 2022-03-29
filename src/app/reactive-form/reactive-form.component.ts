import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  public profileForm = this.formBuilder.group({
    firstName: ['', [Validators.minLength(2), Validators.maxLength(4), Validators.required]],
    lastName: ['', [Validators.required]]
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }

  public updateProfile(): void {
    this.profileForm.patchValue({
      firstName: 'Ex',
      lastName: 'ample'
    });
  }

  public onSubmit(): void {
    console.warn(this.profileForm.value);
  }



}
