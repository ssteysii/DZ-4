// BEGIN
const getChildren = (users) => {
    const childrenArrays = users.map(user => user.children);
    const flatChildren = childrenArrays.flat();
    return flatChildren;
  };
  export default getChildren;
// END