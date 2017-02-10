import { PipeTransform, Pipe } from '@angular/core';

import { IStore } from './store.model';

@Pipe({
    name: 'storeFieldFilter'
})
export class StoreFieldFilterPipe implements PipeTransform {

    transform(stores: IStore[], filterBy: string): IStore[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? stores.filter((store: IStore) =>
            store.hasOwnProperty(filterBy)) : stores;
    }
}
