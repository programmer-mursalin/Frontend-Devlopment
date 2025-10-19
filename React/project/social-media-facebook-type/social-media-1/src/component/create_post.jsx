import { useContext, useRef } from 'react';
import { PostList } from '../store/post-list-store';

const CrPost = () => {
  const { addPost } = useContext(PostList);

  const user_id_element = useRef();
  const post_title_element = useRef();
  const post_body_element = useRef();
  const reaction_element = useRef();
  const tag_element = useRef();
  const handlesubmit = (event) => {
    event.preventDefault();
    const userId = user_id_element.current.value;
    const post_title = post_title_element.current.value;
    const postBody = post_body_element.current.value;
    const reactions = reaction_element.current.value;
    const tags = tag_element.current.value.split(',');
    addPost(userId, post_title, postBody, reactions, tags);
  };
  return (
    <form className='create-post' onSubmit={handlesubmit}>
      <div className='mb-3'>
        <label htmlFor='userId' className='form-label'>
          User ID
        </label>
        <input
          type='text'
          className='form-control'
          id='userId'
          ref={user_id_element}
          placeholder='your User Id'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='title' className='form-label'>
          Post Title
        </label>
        <input
          type='text'
          ref={post_title_element}
          className='form-control'
          id='title'
          placeholder='How are You Feeling today'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='body' className='form-label'>
          post Content
        </label>
        <textarea
          type='text'
          ref={post_body_element}
          className='form-control'
          id='title'
          placeholder='Tell us more about it'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='reaction' className='form-label'>
          No of reaction
        </label>
        <input
          type='text'
          ref={reaction_element}
          className='form-control'
          id='reaction'
          placeholder='how many people  react  of  this post'
        />
      </div>

      <div className='mb-3'>
        <label htmlFor='tags' className='form-label'>
          tags
        </label>
        <input
          type='text'
          className='form-control'
          ref={tag_element}
          id='tags'
          placeholder='please  create  some  tags'
        />
      </div>
      <button type='submit' className='btn btn-primary'>
        Post
      </button>
    </form>
  );
};

export default CrPost;
