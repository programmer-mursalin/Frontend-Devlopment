function Card({ name, job }) {
  // JS Logic (props)
  return (
    <div className='card'>
      <h2>{name}</h2> {/* HTML-like structure */}
      <p>{job}</p>
      <button onClick={() => alert(`Hello, I am ${name}`)}>Say Hi</button>
    </div>
  );
}

export default Card;
