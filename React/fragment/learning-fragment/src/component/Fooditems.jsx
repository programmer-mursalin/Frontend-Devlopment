import React from 'react';
import Item from './item';

const FoodItems = ({ fooditems }) => {
  return (
    <ul className='list-group'>
      {fooditems.map((item) => (
        <Item key={item} foodItem={item} />
      ))}
    </ul>
  );
};

export default FoodItems;
