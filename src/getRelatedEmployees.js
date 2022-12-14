const data = require('../data/zoo_data');

const isManager = (id) => {
  const gere = data.employees.some((employee) => employee.managers.includes(id));
  return gere;
};

const getRelatedEmployees = (managerId) => {
  const gere = data.employees.filter((employee) => employee.managers.includes(managerId));
  const result = [];
  const idMana = isManager(managerId);

  if (idMana === true) {
    gere.forEach((person) => {
      const { firstName, lastName } = person;
      result.push(`${firstName} ${lastName}`);
    });
    return result;
  }

  if (idMana === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
};

module.exports = { isManager, getRelatedEmployees };
