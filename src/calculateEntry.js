const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const child = entrants.filter((x) => x.age < 18).length;
  const adult = entrants.filter((x) => x.age >= 18 && x.age < 50).length;
  const senior = entrants.filter((x) => x.age >= 50).length;
  return {
    child,
    adult,
    senior,
  };
};

const calculateEntry = (entrants) => {
  if (entrants === undefined) {
    return 0;
  }
  if (entrants.length >= 1) {
    const quant = countEntrants(entrants);
    const childs = quant.child * 20.99;
    const adults = quant.adult * 49.99;
    const seniors = quant.senior * 24.99;
    const totalValor = childs + adults + seniors;
    const result = totalValor.toLocaleString('en-us');
    return parseFloat(result);
  }
  return 0;
};

module.exports = { calculateEntry, countEntrants };
