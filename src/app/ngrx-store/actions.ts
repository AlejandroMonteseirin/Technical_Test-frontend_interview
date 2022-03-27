
import { createAction, props } from '@ngrx/store';
import { Newspaper } from '../models/newspaper';

export const addNewsPaper = createAction(
    '[Newspaper List] Add Newspaper',
    props<{ newNewspaper: Newspaper }>()
);

export const addMultipleNewsPaper = createAction(
    '[Newspaper List] Add Newspaper',
    props<{ newNewspapers: Newspaper[] }>()
);

export const resetNewspapers = createAction(
    '[Newspaper List] Resets Newspapers'
    
);

