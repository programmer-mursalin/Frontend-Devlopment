import { createContext, useReducer } from 'react';

const Default_Post_LIST = [
  {
    id: '1',
    title: 'going to dhaka',
    body: 'Hi friend, I am off for my vacation. Hope to enjoy a lot. Peace out!',
    reaction: 0,
    userId: 'user-9',
    tag: ['vacation', 'summer', 'enjoying'],
  },
  {
    id: '2',
    title: 'back from trip',
    body: 'Vacation was great! Feeling refreshed and happy.',
    reaction: 0,
    userId: 'user-10',
    tag: ['travel', 'return', 'happy'],
  },
];

const DefaultContext = {
  PostList1: [],
  addPost: () => {},
  deletePost: () => {},
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
  }
  return newPostList;
};

export const PostListProvider = ({ children }) => {
  const [PostList1, dispatchPostList] = useReducer(
    PostListReducer,
    Default_Post_LIST
  );
  const addPost = (userId, post_title, postBody, reactions, tags) => {
    dispatchPostList({
      type: 'Add_Post',
      payload: {
        id: userId,
        title: post_title,
        body: postBody,
        reaction: 0,
        userId: reactions,
        tag: tags,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: 'Delete_Post',
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ PostList1, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
