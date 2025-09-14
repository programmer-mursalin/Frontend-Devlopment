function Hello() {
  let myName = 'prsant';
  let number = 456;
  let fulName = () => {
    return 'prakash jain';
  };
  return (
    <p>
      message No:{number} I am your prakash {fulName()};
    </p>
  );
}
export default Hello;
