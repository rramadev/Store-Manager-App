import { NgModule, Optional, SkipSelf }  from '@angular/core';

import { LoggerService } from './logger.service';
import { throwIfAlreadyLoaded } from './module-import-guard';

@NgModule({
	declarations: [],
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
