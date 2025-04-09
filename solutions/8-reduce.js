// BEGIN
const groupBy = (array, property) => {
    const result = {};
    for (const obj of array) {
        const key = obj[property];
        if (!Object.hasOwn(result, key)) {
            result[key] = [];
        }
        result[key].push(obj);
    }
    return result;
};
export default groupBy;
// END