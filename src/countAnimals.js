const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (animal === undefined) {
    return data.species.reduce((acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    }, {});
  }
  if (typeof animal.sex === 'string') {
    const animSpe = animal.species;
    const specieU = data.species.find((specie) => specie.name === animSpe).residents;
    const sexP = specieU.filter((specieP) => specieP.sex === 'female');
    return sexP.length;
  }
  if (typeof animal.species === 'string') {
    const animSpe = animal.species;
    const specieZ = data.species.find((specie) => specie.name === animSpe).residents;
    return specieZ.length;
  }
};

module.exports = countAnimals;
