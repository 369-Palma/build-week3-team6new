/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { fetchPosts } from "../redux/actions/index";
import { useSelector, useDispatch } from "react-redux";

function NewsFeed() {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts);
  console.log(post);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      {post.map((post) => (
        <div key={post?.id}>
          <p>{post?.username} said:</p>
          <p>{post?.text}</p>
        </div>
      ))}
    </div>
  );
}

export default NewsFeed;
