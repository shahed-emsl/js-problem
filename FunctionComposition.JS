
function square(num) {
    return num * num;
  }
  

  function double(num) {
    return num * 2;
  }
  
 
  function addFive(num) {
    return num + 5;
  }
  

  function composeFunctions(num) {
    return addFive(double(square(num)));
  }
  

  const result = composeFunctions(3); 
  console.log(result); 
  