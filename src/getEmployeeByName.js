const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  const c = data.employees.find((e) => e.lastName === employeeName || e.firstName === employeeName);

  if (employeeName === undefined) {
    return {};
  }
  return c;
};

module.exports = getEmployeeByName;
