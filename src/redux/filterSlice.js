import { createSlice } from '@reduxjs/toolkit';
import { statusFilters } from "./constants";

const filterInitialState = {
    status: statusFilters.all,
}
const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,

  reducers: {
    filterContacts(state, action) {
      state.status = action.payload;
    },}
});

export const {filterContacts} = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;