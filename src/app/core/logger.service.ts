import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoggerService {

    log(message: string): void {
      console.log('Log.info: ' + message);
    }

    error(message: string): void {
      console.error('Log.error: ' + message);
    }

    handleError(error: Response | any) {
      let errMsg: string;
      if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
      this.error(errMsg);
      return Observable.throw(error.json().error || 'Server error');
    }
}
