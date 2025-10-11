import styles from './welcome.module.css';
import { To_do_item_Create_context } from '../store/to_item_store';
import { useContext } from 'react';
const Welcome = () => {
  const { todoItems } = useContext(To_do_item_Create_context);
  return (
    todoItems.length === 0 && (
      <p className={styles.hed}>Enjoy Your Day With Many Fruits</p>
    )
  );
};
export default Welcome;
