import Final_to_do from './final_to_do_add';
import { To_do_item_Create_context } from '../store/to_item_store';
import { useContext } from 'react';
const To_do_item_new = () => {
  const { todoItems } = useContext(To_do_item_Create_context);
  // console.log({ To_do_item_Create_context });
  return (
    <div className='items-container'>
      {todoItems.map((item) => (
        <Final_to_do
          key={item.id} // unique key
          todoName={item.Name}
          todoDate={item.due_date}
        />
      ))}
    </div>
  );
};

export default To_do_item_new;
