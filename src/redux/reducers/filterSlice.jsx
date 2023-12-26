import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    makes: null
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        updateMakes(state, action) {
            state.makes = action.payload;
        },
        clearMakes(state) {
            state.makes = null
        }
    },
});

export const { updateMakes, clearMakes } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;