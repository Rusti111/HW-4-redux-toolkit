import { createSlice } from "@reduxjs/toolkit";
import { fetchUserById } from "../creator/postCreator";
const initialState = {
    post: [],
    isLoading: false,
    isError: '',
};

const PostSlice = createSlice({
    initialState,
    name: 'post',
    reducers: {
        setPost: (state, action) => {
            console.log(action.payload);
            state.isError = '';
            state.isLoading = false;
            state.post = action.payload;
        },
        setLoading: (state, action) => {
            state.isError = '';
            state.isLoading = true;
            state.post = {}
        },
        setError: (state, action) => {
            state.isError = 'Something has gone wrong';
            state.isLoading = false;
            state.post = {}
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchUserById.fulfilled,(state,action)=>{
            state.post = action.payload
        })
    }
});

const postsReducer = PostSlice.reducer;

export const { setError, setLoading, setPost } = PostSlice.actions;

export default postsReducer;