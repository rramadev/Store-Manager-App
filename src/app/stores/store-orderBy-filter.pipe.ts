import { PipeTransform, Pipe } from '@angular/core';

import { IStore } from './store.model';

@Pipe({
    name: 'orderBy'
})
export class StoreOrderByFilterPipe implements PipeTransform {

    transform(value: IStore[], orderBy: string): IStore[] {
        orderBy = orderBy ? orderBy.toLocaleLowerCase() : null;
        return orderBy ? (function() {
          // Sort Function
          value.sort((a, b) => {
            if (a[orderBy].toLowerCase() < b[orderBy].toLowerCase() ) {
              return -1;
            } else if (a[orderBy].toLowerCase()  > b[orderBy].toLowerCase() ) {
              return 1;
            } else {
              return 0;
            }
          });
          return value;
        }()) : value;
    }
}
