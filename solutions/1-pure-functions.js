// BEGIN
const sayPrimeOrNot = (number) => {
  const isPrime = (num) => {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };
  if (isPrime(number)) {
    console.log('yes');
  } else {
    console.log('no');
  }
};
export default sayPrimeOrNot;
  
// END 