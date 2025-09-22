import React from 'react';
import FoodItems from './component/Fooditems';
import ErrMsg from './component/errorMessage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  let fooditems = ['sobji', 'roti', 'porota', 'salad'];

  return (
    <React.Fragment>
      <h1>healthy food</h1>
      <ErrMsg items={fooditems}></ErrMsg>
      <FoodItems items={fooditems}></FoodItems>
    </React.Fragment>
  );
}

export default App;
