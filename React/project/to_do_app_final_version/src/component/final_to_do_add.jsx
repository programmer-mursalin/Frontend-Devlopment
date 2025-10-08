import { To_do_item_Create_context } from '../store/to_item_store';
import { useContext } from 'react';
function Final_to_do({ todoName, todoDate }) {
  const { delete_item } = useContext(To_do_item_Create_context);

  return (
    <div className='row kg-row'>
      <div className='col-6'>{todoName}</div>
      <div className='col-4'>{todoDate}</div>
      <div className='col-2'>
        <button
          type='button'
          className='btn btn-danger kg-button'
          onClick={() => delete_item(todoName)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Final_to_do;
