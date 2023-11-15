import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


axios.defaults.baseURL = 'https://654e9f03cbc3253557430564.mockapi.io';


/*
 * GET @ /adverts/fetchAll
 */
export const fetchLimitedAdverts = createAsyncThunk('adverts/fetchAll', async (_, thunkAPI) => {
    try {
        const { adverts } = thunkAPI.getState();
        const { currentPage, perPage } = adverts;
        const { data } = await axios.get(`/adverts?page=${currentPage}&limit=${perPage}`);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const fetchAllAdverts = async () => {
    try {
        const { data } = await axios.get('/adverts');
        return data;
    } catch (error) {
        console.log(error.message);
    }
};
