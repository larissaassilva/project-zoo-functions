const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const idE = data.employees.find((employee) => employee.id === id);
  const animal = idE.responsibleFor[0];
  const animal1 = data.species.find((species) => species.id === animal);
  const animalVe = animal1.residents.filter((residents) => residents);
  const result = animalVe.sort(({ age: age1 }, { age: age2 }) => age2 - age1)[0];
  const { name, sex, age } = result;
  return [name, sex, age];
};

module.exports = getOldestFromFirstSpecies;
