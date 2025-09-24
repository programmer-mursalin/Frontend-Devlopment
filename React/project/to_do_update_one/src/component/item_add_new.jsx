import Final_to_do from './final_to_do_add';
const To_do_item_new = ({ todoItems }) => {
  return (
    <div class='items-container'>
      {todoItems.map((item) => (
        <Final_to_do
          todoName={item.Name}
          todoDate={item.due_date}
        ></Final_to_do>
      ))}
    </div>
  );
};
export default To_do_item_new;
