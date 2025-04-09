// BEGIN
export default function convert (...dates) {
    const newDates = dates.map(dateArray => {
      const [year, month, day] = dateArray;
      const date = new Date(year, month, day);
      return date.toDateString();
    });
    if (dates.length === 0) {
        return [];
      }
    return newDates;
};
   convert;
  
// END