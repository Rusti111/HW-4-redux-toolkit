import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
};

const storeSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        changeComponent: (state, action) => {
            state.component = action.payload;
            state.history.push(action.payload);
        },
    }
});

const storeReducer = storeSlice.reducer;

export const { changeComponent } = storeSlice.actions;

export default storeReducer;