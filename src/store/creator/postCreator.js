import api from "../../api";
import { setPosts } from "../slice/postsSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchAllPosts = (dispatch) => {
    console.log('1');
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => dispatch(setPosts(data)));
};

export const fetchUserById = createAsyncThunk(
    'users/fetchByIdStatus',
    async (userId, thunkAPI) => {
        try {
            const response = await api.getDetails(userId)
            return response.data
        }
        catch (err) {
        }

    },
)

