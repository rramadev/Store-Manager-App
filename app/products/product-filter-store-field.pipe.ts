import { PipeTransform, Pipe } from '@angular/core';

import { IStore } from './store';

@Pipe({
    name: 'storeFieldFilter'
})
export class StoreFieldFilterPipe implements PipeTransform {

    transform(value: IStore[], filterBy: string): IStore[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((store: IStore) =>
            store.hasOwnProperty(filterBy)) : value;
    }
}
