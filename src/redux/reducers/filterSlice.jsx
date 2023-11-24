import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    makes: [],
    prices: [],
    mileages: []
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        updateMakes(state, action) {
            // return action.payload;
            // state.makes.push(action.payload)
            state.makes = action.payload;
        },
        updatePrices(state, action) {
            state.prices = action.payload;
        },
        updateMileages(state, action) {
            state.mileages = action.payload;
        },
    },
});

export const { updateMakes, updatePrices, updateMileages } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;