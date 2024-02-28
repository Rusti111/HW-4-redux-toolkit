import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import classes from "./PostDetails.module.css";
import { fetchUserById } from "../../store/creator/postCreator";

const PostDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const post = useSelector((state) => state.post.post);
  console.log(post);
  const onBack = () => navigate(-1);

  useEffect(() => {
    dispatch(fetchUserById(params.id));
  }, []);

  return (
    <div className={classes.post}>
      {post.length !== 0 ? (
        <>
          <button onClick={onBack}>Back</button>
          <div className="header">
            <h1>{post.id}</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PostDetails;
