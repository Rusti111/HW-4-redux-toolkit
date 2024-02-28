import { configureStore } from '@reduxjs/toolkit';
import PostSlice from './slice/postSlice';
import postReducer from './slice/postsSlice';

const rootReducer = ({
    post: PostSlice,
    posts: postReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;