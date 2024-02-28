import { React, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {fetchAllPosts} from "../../store/creator/postCreator";
import classes from "./Post.module.css";

const Post = () => {
  const { posts } = useSelector((state) => state.posts);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  console.log(posts);
  const getShortValue = (text, id) => {
    if (text.length > 20) {
      return (
        <>
          {text.slice(0, 20)}...
          <Link to={`/posts/${id}`} state={{ from: location.pathname }}>
            More...
          </Link>
        </>
      );
    }
    return text;
  };

  useEffect(() => {
    fetchAllPosts(dispatch)
  }, [dispatch]);

  return (
    <div className={classes.con}>
      {posts.length !== 0 &&
        posts?.map((post) => {
          const onMoreClick = () => navigate(`/posts/${post.id}`);
          return (
            <div className={classes.posts} key={`post-${post.id}`}>
              <div className={classes.post}>
                <h1>{post.id}</h1>
                <h2>{post.title}</h2>
                <p>{post.body.length > 20 ? getShortValue(post.body, post.id) : '0'}</p>
              </div>
              <button onClick={onMoreClick}>Details</button>
            </div>
          );
        })}
    </div>
  );
};

export default Post;