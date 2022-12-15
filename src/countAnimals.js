const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  // const animalP = animal.species;
  // const nameP = data.species.filter((specie) => specie.name === animalP);
  // const uai = data.species;//.forEach(element => {
  // //   return element.name.length;
  // // });
  // // const length = name.residents.find((resident) => resident.length);
  // if (animal === undefined) {
  //   const name = data.species.map((specie) => specie.name);
  //   return animalP;
  // }
  // const result = `${animalP}:  `;
  // return nameP.residents;
};

console.log(countAnimals({ species: 'penguins' }));

module.exports = countAnimals;
