import React from 'react';

const Item = (props) => {
  return <li className='list-group-item'>{props.foodItem}</li>;
};

export default Item;
