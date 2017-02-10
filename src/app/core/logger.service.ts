import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

    log(message: string): void {
      console.log("Log.info: " + message);
    }

    error(message: string): void {
      console.error("Log.error: " + message);
    }
}
