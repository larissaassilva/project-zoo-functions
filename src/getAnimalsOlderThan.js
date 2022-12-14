const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, ageP) => {
  const pesqAni = data.species.find((specie) => specie.name === animal);
  const trueFalse = pesqAni.residents.every((resident) => (resident.age) > ageP);
  return trueFalse;
};

module.exports = getAnimalsOlderThan;
