import { createReducer, on } from '@ngrx/store';
import { Newspaper } from '../models/newspaper';
import { addMultipleNewsPaper, addNewsPaper, resetNewspapers } from './actions';

const initialState: Array<Newspaper> = [];

export const newspaperReducer = createReducer(initialState,
    on(addNewsPaper, (state, action) => ([ ...state, action.newNewspaper])),
    on(addMultipleNewsPaper, (state, action) => (state.concat(action.newNewspapers))),
    on(resetNewspapers, state => initialState)

)