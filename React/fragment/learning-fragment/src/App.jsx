import React from 'react';
import FoodItems from './component/Fooditems';
import ErrMsg from './component/errorMessage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  let fooditems = ['dal', 'roti', 'porota', 'salad'];

  return (
    <React.Fragment>
      <h1>healthy food</h1>
      <ErrMsg fooditems={fooditems} />
      <FoodItems fooditems={fooditems} />
    </React.Fragment>
  );
}

export default App;
