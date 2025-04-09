// BEGIN
const getGirlFriends = (users) => {
    const listOfUsers = users.map(user => user.friends);
    const allUsers = listOfUsers.flat();
    const girlFriends = allUsers.filter(friend => friend.gender === 'female');
    return girlFriends;
 };
  export default getGirlFriends;
// END