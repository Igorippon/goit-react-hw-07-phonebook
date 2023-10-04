import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        filterName(state, action) { return state = action.payload; },
    },
});

export const { filterName } = slice.actions;
export const filterReducer = slice.reducer;
export const getFilterValue = state => state.filter;
