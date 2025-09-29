import React from 'react';
import FoodItems from './component/Fooditems';
import ErrMsg from './component/errorMessage';
import Container from './component/container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FoodInput from './component/Foodinput';

function App() {
  let fooditems = ['sobji', 'roti', 'porota', 'salad'];

  return (
    <Container>
      <h1 className='hd'>healthy food</h1>
      <FoodInput></FoodInput>
      <ErrMsg items={fooditems}></ErrMsg>
      <FoodItems items={fooditems}></FoodItems>
    </Container>
  );
}

export default App;
