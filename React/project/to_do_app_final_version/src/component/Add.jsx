import { useRef, useContext } from 'react';
import { MdAddLink } from 'react-icons/md';
import { To_do_item_Create_context } from '../store/to_item_store';
function Todoitem1() {
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const { add_item } = useContext(To_do_item_Create_context);

  const button_click = (event) => {
    event.preventDefault();

    const todoname = todoNameElement.current.value.trim();
    const tododate = todoDateElement.current.value;

    if (!todoname) return; // optional validation

    add_item(todoname, tododate);

    todoNameElement.current.value = '';
    todoDateElement.current.value = '';
  };

  return (
    <div className='container'>
      <form className='row kg-row' onSubmit={button_click}>
        <div className='col-6'>
          <input
            type='text'
            ref={todoNameElement}
            placeholder='Enter Todo here'
          />
        </div>
        <div className='col-4'>
          <input type='date' ref={todoDateElement} />
        </div>
        <div className='col-2'>
          <button type='submit' className='btn btn-success kg-button'>
            <MdAddLink />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Todoitem1;
