function beepBoop(number) {
  
  const parsedNumber = parseInt(number, 10);
  let arrayValues = [];
  
  if ((!Number.isInteger(parsedNumber))|| (parsedNumber <= 0)) {
    return {
      error: true,
      message:"A positive Integer was not entered"
    };
  } else {
      for ( i = 0 ; i <= parsedNumber; i += 1) {
        arrayValues.push(i);
      }
  }

  console.log(arrayValues);
}