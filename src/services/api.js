const data = require('../data/data.json');

export const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 10);
  });
};

export const fetchDataByDay = (day) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let filteredData = [];
      data.forEach((element) => {
        const convertedData = new Date(Number(element.date)).getDay();
        if (convertedData === day) {
          filteredData.push(element);
        }
      });
      resolve(filteredData);
    }, 10);
  });
};

export const fetchDataByHoursOfDay = (day, hours) => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      let filteredData = [];
      const dayData = await fetchDataByDay(day);
      dayData.forEach((element) => {
        const convertedData = new Date(Number(element.date)).getHours();
        if (convertedData === hours) {
          filteredData.push(element);
        }
      });
      resolve(filteredData);
    }, 10);
  });
};
