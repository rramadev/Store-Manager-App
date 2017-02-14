import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { RatingComponent } from './rating.component';

@NgModule({
	declarations: [RatingComponent],
	exports: [
		CommonModule,
		FormsModule,
		MaterialModule,
		RatingComponent
	]
})
export class SharedModule { }
