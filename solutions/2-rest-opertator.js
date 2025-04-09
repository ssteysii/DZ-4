import {sum} from 'lodash';

// BEGIN
const average = (...numbers) => {
    if (numbers.length === 0) {
      return null;
    }
    const totalSum = sum(numbers);
    const averageValue = totalSum / numbers.length;
    return averageValue;
};
export default average;
// END