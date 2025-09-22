import React from 'react';

const ErrMsg = ({ items }) => {
  return <>{items.length === 0 ? <h3>I am hungry</h3> : null}</>;
};
export default ErrMsg;
