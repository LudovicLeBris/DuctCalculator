import { CommonModule } from '@angular/common';
import { Component, Inject, Input, OnInit, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AdditionalApd } from '../../models/apd/additional-apd.model';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-additional-apd-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './additional-apd-form.component.html',
  styleUrl: './additional-apd-form.component.css'
})
export class AdditionalApdFormComponent implements OnInit {
  additionalApd: AdditionalApd;
  additionalApdName: string = '';
  additionalApdValue?: number = 0
  form: FormGroup = new FormGroup({});
  isAddForm: boolean = false;

  constructor(
    private formBuilder : FormBuilder,
    private _bottomSheet: MatBottomSheet,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data? : {additionalApd: AdditionalApd},
  ) {
    if (data) {
      this.additionalApd = data.additionalApd;
      this.isAddForm = false;
    } else {
      this.additionalApd = new AdditionalApd();
      this.isAddForm = true;
    }
  }

  ngOnInit(): void {
    if (!this.isAddForm) {
      this.additionalApdName = this.additionalApd.getName();
      this.additionalApdValue = this.additionalApd.getValue();
    } else {
      this.additionalApd = new AdditionalApd();
      this.additionalApdValue = undefined;
    }

    this.form = this.formBuilder.group({
      name: [this.additionalApdName, [Validators.required]],
      value: [this.additionalApdValue, [Validators.required, Validators.min(1)]],
    });
  }

  onSubmit():void {
    if (this.form.valid) {
      this.additionalApd.setName(this.form.get('name')!.value);
      this.additionalApd.setValue(this.form.get('value')!.value);

      this._bottomSheet.dismiss(this.additionalApd);
    }
  }
}
