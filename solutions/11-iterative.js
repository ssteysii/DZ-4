const smallestDivisor = (num) => {
    // BEGIN
    if (num <= 1) {
      return 1;
    }
    for (let divisor = 2; divisor <= num; divisor += 1) {
      if (num % divisor === 0) {
        return divisor;
      }
    }
    return num;
    // END
  };
  
export default smallestDivisor;
  