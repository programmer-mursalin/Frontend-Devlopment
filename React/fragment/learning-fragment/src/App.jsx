import React, { useState } from 'react';
import FoodItems from './component/Fooditems';
import ErrMsg from './component/errorMessage';
import Container from './component/container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FoodInput from './component/Foodinput';

function App() {
  const [fooditems, setFoodItems] = useState([
    'sobji',
    'roti',
    'porota',
    'salad',
  ]);
  // const [textToshow, changeMethod] = useState('Food is here');
  // let textToshow = textToArr[0];
  // let changeMethod = textToArr[1];

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      let newFoodItem = event.target.value;
      let newItems = [...fooditems, newFoodItem];
      setFoodItems(newItems);
    }
  };
  return (
    <Container>
      <h1 className='hd'>healthy food</h1>
      <FoodInput onKeyDown={onKeyDown}></FoodInput>

      <ErrMsg items={fooditems}></ErrMsg>
      <FoodItems items={fooditems}></FoodItems>
    </Container>
  );
}

export default App;
