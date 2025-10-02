import styles from './Foodinput.module.css';
const FoodInput = ({ onKeyDown }) => {
  return (
    <input
      className={styles.inp}
      type='text'
      placeholder='Enter The number'
      onKeyDown={onKeyDown}
    ></input>
  );
};
export default FoodInput;
