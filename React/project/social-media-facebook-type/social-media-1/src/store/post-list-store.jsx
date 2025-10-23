// store/post-list-store.jsx
import { createContext, useReducer } from 'react';

const DefaultContext = {
  PostList1: [],
  addPost: () => {},
  deletePost: () => {},
  addIntiPost: () => {},
};

export const PostList = createContext(DefaultContext);

const PostListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === 'Delete_Post') {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === 'Add_Post') {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === 'addIni') {
    // Normalize reactions to a number
    newPostList = action.payload.posts.map((post) => ({
      ...post,
      reactions:
        typeof post.reactions === 'object'
          ? post.reactions?.likes ?? 0
          : post.reactions ?? 0,
    }));
  }
  return newPostList;
};

export const PostListProvider = ({ children }) => {
  const [PostList1, dispatchPostList] = useReducer(PostListReducer, []);

  const addPost = (userId, post_title, postBody, reactions, tags) => {
    dispatchPostList({
      type: 'Add_Post',
      payload: {
        id: userId,
        title: post_title,
        body: postBody,
        reactions: reactions,
        tags: tags,
      },
    });
  };

  const addIntiPost = (posts) => {
    dispatchPostList({
      type: 'addIni',
      payload: { posts },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: 'Delete_Post',
      payload: { postId },
    });
  };

  return (
    <PostList.Provider value={{ PostList1, addPost, addIntiPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
