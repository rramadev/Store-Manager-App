import { Component } from '@angular/core';
import { MdSnackBar } from '@angular/material';

@Component({
	selector: 'sm-app',
	moduleId: module.id,
	templateUrl: './app.component.html',
})
export class AppComponent {
	pageTitle: string = 'Store Manager';
	snackBarMsg: string = 'Store Manager App v1.0.0 | rramadev.github.io';

	constructor(public snackBar: MdSnackBar) { }

	openSnackBar() {
		this.snackBar.open(this.snackBarMsg, '| Close', {
			duration: 3000,
		});
	}
}
