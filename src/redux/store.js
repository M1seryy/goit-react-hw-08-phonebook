import { configureStore } from '@reduxjs/toolkit';
import { authReudcer } from './authSlice';

import { filterReducer } from './filterSlice';
import { contactReducer } from './contactSlice';

console.log('filterReducer: ', filterReducer);
console.log(authReudcer);
console.log('contactReducer: ', contactReducer);
export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
    auth: authReudcer,
  },
});
