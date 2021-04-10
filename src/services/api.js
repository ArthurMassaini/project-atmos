const data = require('../data/data.json');

export const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 200);
  });
};
