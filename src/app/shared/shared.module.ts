import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { StarComponent } from './star.component';

@NgModule({
	declarations: [StarComponent],
	exports: [
		CommonModule,
		FormsModule,
		MaterialModule,
		StarComponent
	]
})
export class SharedModule { }
