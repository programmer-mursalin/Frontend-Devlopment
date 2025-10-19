import { useContext } from 'react';
import { PostList } from '../store/post-list-store';
import { MdDelete } from 'react-icons/md';

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className='card post-card' style={{ width: '30rem' }}>
      <div className='card-body'>
        <h5 className='card-title'>
          {post.title}
          <span
            class='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className='card-text'>{post.body}</p>
        {post.tag.map((ref) => (
          <span
            style={{
              padding: '9px',
            }}
            key={ref}
            className='hastag badge text-bg-primary'
          >
            {ref}
          </span>
        ))}
        <div className='alert alert-success  reaction' role='alert'>
          This post is reacted by :{post.reaction}
        </div>
      </div>
    </div>
  );
};
export default Post;
