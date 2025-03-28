// registerEvent ফাংশন ডিফাইন করা হচ্ছে
function registerEvent(eventType, callback) {
  if (eventType === 'click') {
    callback(); // যদি ইভেন্ট টাইপ 'click' হয়, তাহলে কলব্যাক কল হবে
  } else {
    console.log('Invalid Event'); // অন্য ইভেন্ট টাইপ হলে 'Invalid Event' প্রিন্ট হবে
  }
}

// একটি কলব্যাক ফাংশন ডিফাইন করা হচ্ছে
const handleClick = () => console.log('Button Clicked!');

// ফাংশন কল করা হচ্ছে
registerEvent('click', handleClick); // Output: Button Clicked!
registerEvent('hover', handleClick); // Output: Invalid Event

// const numbers = [1, 2, 3, 4];
// const double = (x) => x * 2;

// const result = processArray(numbers, double);
// console.log(result);

// const numbers = [1, 2, 3, 4, 5, 6];
// const isEven = (x) => x % 2 === 0;

// const result = filterArray(numbers, isEven);
// console.log(result);

// const done = () => console.log('Done!');

// delayedPrint('Printing after delay...', done);

// const handleClick = () => console.log('Button Clicked!');

// registerEvent('click', handleClick);
// registerEvent('hover', handleClick);

// const first = () => console.log('First function executed!');
// const second = () => console.log('Second function executed!');

// nestedCallback(first, second);
