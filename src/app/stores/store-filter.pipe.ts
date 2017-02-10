import { PipeTransform, Pipe } from '@angular/core';

import { IStore } from './store.model';

@Pipe({
    name: 'storeFilter'
})
export class StoreFilterPipe implements PipeTransform {

    transform(stores: IStore[], filterBy: string, filterFields: string[]): IStore[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? stores.filter((store: IStore) => {
          return filterFields.some(field => {
            return (store[field].toLocaleLowerCase().indexOf(filterBy) !== -1) ?
              true : false;
          });
          // if ((store.name.toLocaleLowerCase().indexOf(filterBy) !== -1)
          // || (store.address.toLocaleLowerCase().indexOf(filterBy) !== -1))
          // {
          //   return true;
          // } else {
          //   return false;
          // }
        }) : stores;
    }
}
