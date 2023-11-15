import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    favorities: []
};

export const favoritiesSlice = createSlice({
    name: 'favorities',
    initialState,
    reducers: {
        addFavorite(state, action) {
            state.items.push(action.payload);
            state.favorities.push(action.payload.id);
        },

        deleteFavorite(state, action) {
            const filteredItems = state.items.filter((elem) => elem.id !== action.payload.id);
            state.items = filteredItems;
            state.favorities = filteredItems.map(item => item.id);
        }
    }
});

export const favoritiesReducer = favoritiesSlice.reducer;
export const { addFavorite, deleteFavorite } = favoritiesSlice.actions;