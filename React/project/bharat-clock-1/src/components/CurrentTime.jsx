import { useEffect, useState } from 'react';

let CurrentTime = () => {
  let [time, setTime] = useState(new Date());
  useEffect(() => {
    const interValid = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interValid);
    };
  }, []);

  return (
    <p className='lead'>
      This is the current time: {time.toLocaleDateString()} -{' '}
      {time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
