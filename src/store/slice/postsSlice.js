import { createSlice } from "@reduxjs/toolkit";
import { fetchUserById } from "../creator/postCreator";
const initialState = {
    posts: [],
    isLoading: false,
    isError: '',
};

const PostSlice = createSlice({
    initialState,
    name: 'posts',
    reducers: {
        setPosts: (state, action) => {
            console.log(action.payload);
            state.isError = '';
            state.isLoading = false;
            state.posts = action.payload;
        },
        setLoading: (state, action) => {
            state.isError = '';
            state.isLoading = true;
            state.posts = []
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

export const { setError, setLoading, setPosts } = PostSlice.actions;

export default postsReducer;