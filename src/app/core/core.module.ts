import { NgModule, Optional, SkipSelf }  from '@angular/core';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { LoggerService } from './logger.service';
import { throwIfAlreadyLoaded } from './module-import-guard';

@NgModule({
	declarations: [],
	imports: [
		InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 300 })
	],
	exports: [],
  providers: [
    LoggerService
  ]
})
export class CoreModule {
	constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
		throwIfAlreadyLoaded(parentModule, 'CoreModule');
	}
}
