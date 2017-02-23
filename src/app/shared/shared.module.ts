import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule, MdSnackBar } from '@angular/material';

import { RatingComponent } from './rating.component';  

@NgModule({
	declarations: [RatingComponent],
	imports: [
    MaterialModule.forRoot()
  ],
	exports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MaterialModule,
		RatingComponent
	],
	providers: [
		MdSnackBar
	]
})
export class SharedModule { }
