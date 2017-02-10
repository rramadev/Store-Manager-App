import { Component } from '@angular/core';

@Component({
	selector: 'acme-app',
	template: `
    <div>
      <nav class='navbar navbar-default'>
        <div class='container-fluid'>
          <a class='navbar-brand'>
						<img src="assets/images/sm-logo.png"
							 style="max-height:50px;"/>
					</a>
          <ul class='nav navbar-nav'>
            <li><a [routerLink]="['/welcome']">Home</a></li>
            <li><a [routerLink]="['/stores']">Store List</a></li>
            <li><a [routerLink]="['/products']">Product List</a></li>
          </ul>
        </div>
      </nav>
      <div class='container'>
        <router-outlet></router-outlet>
      </div>
    </div>
    `
})
export class AppComponent {
	pageTitle: string = 'Store Manager';
}
