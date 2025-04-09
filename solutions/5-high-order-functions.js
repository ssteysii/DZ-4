import { sortBy } from 'lodash';

// BEGIN
const takeOldest = (users, count = 1) => {
    const sortedUsers = sortBy(users, (user) => Date.parse(user.birthday));
    return sortedUsers.slice(0, count);
};
  export default takeOldest;
// END