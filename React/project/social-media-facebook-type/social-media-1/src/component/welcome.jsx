import { createContext } from 'react';
import { PostList } from '../store/post-list-store';
const Welcome = ({ onClickPost }) => {
  const { PostList1 } = createContext(PostList);
  return (
    <>
      <center>
        <h1>welcome dada</h1>

        <button type='button' class='btn btn-primary' onClick={onClickPost}>
          Fetch post form the server
        </button>
      </center>
    </>
  );
};

export default Welcome;
