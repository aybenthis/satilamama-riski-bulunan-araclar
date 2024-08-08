const { arabaStogu } = require('./arabaStogu.js');

const getRiskyCarList = (carList) => {
  return carList.filter(
    (car) =>
      car.km_driven >= 250000 ||
      2023 - car.year >= 20 ||
      car.owner === 'Dördüncü veya Daha Fazla Sahibi'
  );
};
