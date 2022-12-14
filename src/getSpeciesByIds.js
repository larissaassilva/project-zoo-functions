const data = require('../data/zoo_data');

const getSpeciesByIds = (ids = 0, ids2 = 0) => {
  const resul = data.species.filter((specieS) => specieS.id === ids || specieS.id === ids2);
  return resul;
};

module.exports = getSpeciesByIds;
