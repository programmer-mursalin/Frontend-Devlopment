import styles from './Foodinput.module.css';
const FoodInput = () => {
  const handleChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <input
      className={styles.inp}
      type='text'
      placeholder='Enter The number'
      onChange={handleChange}
    ></input>
  );
};
export default FoodInput;
