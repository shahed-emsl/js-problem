
const cars = [
    { make: "Toyota", model: "Corolla", year: 2022 },
    { make: "Honda", model: "Civic", year: 2023 },
    { make: "Ford", model: "Mustang GT", year: 2021 },
    { make: "Chevrolet", model: "Camaro ZL1", year: 2022 }
  ];
  

  function sortCarsByYear(cars) {
    return cars.sort((a, b) => a.year - b.year);  
  }
  

  const sortedCars = sortCarsByYear(cars);
  console.log(sortedCars);
  