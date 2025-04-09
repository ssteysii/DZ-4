const run = (text) => {
    // BEGIN
    const takeLast = (str, n) => { 
      if (str === null || str.length < n) {
        return null;
      }
      const lastChars = str.slice(-n);
      const reversedLastChars = lastChars.split('').reverse().join('');
      return reversedLastChars;
    };
    
    // END
    return takeLast(text, 4);
};
  
export default run;