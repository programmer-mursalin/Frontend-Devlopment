import React from 'react';
import Item from './item';

const FoodItems = ({ items }) => {
  return (
    <ul className='list-group'>
      {items.map((item) => (
        <Item key={item} foodItem={item} />
      ))}
    </ul>
  );
};

export default FoodItems;
