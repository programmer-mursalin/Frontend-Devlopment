import { useState } from 'react';

function Todoitem1({ item }) {
  const [todoname, setTodoname] = useState('');
  const [tododate, setTododate] = useState('');

  const add_name = (event) => {
    setTodoname(event.target.value);
  };
  const add_date = (event) => {
    setTododate(event.target.value);
  };
  const button_click = () => {
    item(todoname, tododate);
    setTododate('');
    setTodoname('');
  };
  return (
    <div className='container'>
      <div className='row kg-row'>
        <div className='col-6'>
          <input
            type='text '
            placeholder='Enter Todo here'
            onChange={add_name}
          />
        </div>
        <div className='col-4'>
          <input type='date' onChange={add_date} />
        </div>
        <div className='col-2'>
          <button
            type='button'
            className='btn btn-success kg-button'
            onClick={button_click}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todoitem1;
