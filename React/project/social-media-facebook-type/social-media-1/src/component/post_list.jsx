import { useContext } from 'react';
import Post from './post';

import { PostList as PostListdata } from '../store/post-list-store';

const Post_List = () => {
  const { PostList1 } = useContext(PostListdata);

  return (
    <>
      {PostList1.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
};
export default Post_List;
