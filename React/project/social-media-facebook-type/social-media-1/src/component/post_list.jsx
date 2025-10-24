// components/post_list.jsx
import { useContext, useEffect, useState } from 'react';
import Post from './post';
import Welcome from './welcome';
import { PostList as PostListdata } from '../store/post-list-store';
import Loading from './loading';
const Post_List = () => {
  const { PostList1, addIntiPost } = useContext(PostListdata);
  const [fetching, setfetching] = useState(false);
  useEffect(() => {
    setfetching(true);
    fetch('https://dummyjson.com/posts')
      .then((res) => res.json())
      .then((data) => {
        addIntiPost([]);
        setfetching(false);
      });
  }, []);

  return (
    <>
      {fetching && <Loading />}
      {!fetching && PostList1.length === 0 && <Welcome />}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {!fetching &&
          PostList1.map((post) => <Post key={post.id} post={post} />)}
      </div>
    </>
  );
};
export default Post_List;
