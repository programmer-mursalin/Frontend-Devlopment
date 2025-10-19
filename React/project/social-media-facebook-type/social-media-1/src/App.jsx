import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './component/header';
import Footer from './component/footer';
import Sidebar from './component/sidebar';
import CrPost from './component/create_post';
import Post_List from './component/post_list';
import PostListProvider from './store/post-list-store';
function App() {
  const [selectedTab, SetselectedTab] = useState('CreatePost');
  return (
    <>
      <PostListProvider>
        <div className='d'>
          <Sidebar
            selectedTab={selectedTab}
            SetselectedTab={SetselectedTab}
          ></Sidebar>

          <div className='flex-grow-1 Element' style={{ marginLeft: '280px' }}>
            <Header />
            {selectedTab === 'Home' ? (
              <Post_List></Post_List>
            ) : (
              <CrPost></CrPost>
            )}

            <div className='ft'>
              {' '}
              <Footer />
            </div>
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
