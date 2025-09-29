import React from 'react';
import styles from './item.module.css';

const Item = ({ foodItem, handleEvent }) => {
  return (
    <li className={`${styles['kg-item']} list-group-item`}>
      <span className={styles['kg-span']}>{foodItem}</span>
      <button
        className={`  btn btn-success  ${styles.mybtn}  `}
        onClick={handleEvent}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
