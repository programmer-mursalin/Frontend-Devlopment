// components/post_list.jsx
import { useContext } from 'react';
import Post from './post';
import Welcome from './welcome';
import { PostList as PostListdata } from '../store/post-list-store';

const Post_List = () => {
  const { PostList1, addIntiPost } = useContext(PostListdata);

  const handleonClickPost = () => {
    fetch('https://dummyjson.com/posts')
      .then((res) => res.json())
      .then((data) => {
        addIntiPost(data.posts);
      });
  };

  return (
    <>
      {PostList1.length === 0 && <Welcome onClickPost={handleonClickPost} />}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {PostList1.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};
export default Post_List;
