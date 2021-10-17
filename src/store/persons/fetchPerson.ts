import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { PersonData, PersonState } from '../types';
import axios from 'axios';
import { AnyRecord } from 'dns';


const initialState: PersonState = {
    data: null,
    loading: false,
    error: '',
}

export const fetchPersons = createAsyncThunk(
    'persons/fetchPersons',
    async () => {
        let allData: any[]

        const responseData = await axios.get(`http://localhost:8081/persons`)
        return responseData.data
    }
)

const personSilce = createSlice({
    name: 'persons',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPersons.pending, (state: PersonState) => {
            state.loading = true
        })
        builder.addCase(fetchPersons.fulfilled, (state: PersonState, action) => {
            state.data = action.payload
            state.loading = false
            state.error = ''
        })
        builder.addCase(fetchPersons.rejected, (state: PersonState, action) => {
            state.data = null
            state.loading = false
            state.error = 'Error'
        })
    }
})

export const selectDataPersons = (state: RootState) => state.persons;

export default personSilce.reducer;