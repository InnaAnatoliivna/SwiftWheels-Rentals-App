import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    makes: []
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        updateMakes(state, action) {
            state.makes = action.payload;
        },
        clearMakes(state) {
            state.makes = []
        }
    },
});

export const { updateMakes, clearMakes } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;