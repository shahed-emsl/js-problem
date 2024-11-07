
const people = [
    { name: "Jahir", age: 28, gender: "male" },
    { name: "Sharmin", age: 25, gender: "female" },
    { name: "Rahat", age: 30, gender: "male" },
    { name: "Ayesha", age: 22, gender: "female" },
    { name: "Sohail", age: 35, gender: "male" }
  ];
  
  function getMaleNames(people) {
    return people
      .filter(person => person.gender === "male")
      .map(person => person.name); 
  }
  
  const maleNames = getMaleNames(people);
  console.log(maleNames); 
  