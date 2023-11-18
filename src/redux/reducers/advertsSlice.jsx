import { createSlice } from '@reduxjs/toolkit'
import { fetchLimitedAdverts } from '../operations'

const initialState = {
    items: [],
    isLoading: false,
    error: null,
    currentPage: 1,
    perPage: 12,
};

const advertsSlice = createSlice({
    name: 'adverts',
    initialState: initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setPerPage: (state, action) => {
            state.perPage = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLimitedAdverts.pending, (state) => {
                state.isLoading = true;
            })
            //
            .addCase(fetchLimitedAdverts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            //
            .addCase(fetchLimitedAdverts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                // console.log('adverts-fullfield :', action.payload);
                // state.items = action.payload;
                // state.items.push(action.payload);
                action.payload.forEach(newAdvert => {
                    const existingAdvertIndex = state.items.findIndex(existingAdvert => existingAdvert.id === newAdvert.id);
                    if (existingAdvertIndex !== -1) {
                        state.items[existingAdvertIndex] = newAdvert;
                    } else {
                        state.items.push(newAdvert);
                    }
                });

            })
    }
});

export const { setCurrentPage, setPerPage } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
