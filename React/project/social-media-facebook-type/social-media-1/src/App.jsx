import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './component/Header';
import Footer from './component/Footer';
import Sidebar from './component/Sidebar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='d'>
        <Sidebar />

        <div className='flex-grow-1 Element' style={{ marginLeft: '280px' }}>
          <Header />
          <div className='head'></div>
          <div className='ft'>
            {' '}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
