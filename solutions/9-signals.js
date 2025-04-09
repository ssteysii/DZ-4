import get from 'lodash/get.js';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

// BEGIN
const getFreeDomainsCount = (emails) => {
  const domainCounts = {};
  for (const email of emails) {
    const domain = get(email.split('@'), 1);
    if (domain && freeEmailDomains.includes(domain)) {
      domainCounts[domain] = (domainCounts[domain] || 0);
      domainCounts[domain] += 1;
    }
  }
  return domainCounts;
};
export default getFreeDomainsCount;
// END