import { PipeTransform, Pipe } from '@angular/core';

import { IStore } from './store';

@Pipe({
    name: 'storeFilter'
})
export class StoreFilterPipe implements PipeTransform {

    transform(value: IStore[], filterBy: string): IStore[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((store: IStore) => {
          if ((store.name.toLocaleLowerCase().indexOf(filterBy) !== -1)
          || (store.address.toLocaleLowerCase().indexOf(filterBy) !== -1))
          { 
            return true;
          } else {
            return false;
          }
        }) : value;
    }
}
