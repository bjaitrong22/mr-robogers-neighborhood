function beepBoop(number) {
  
  const parsedNumber = parseInt(number, 10);
  
  if ((!Number.isInteger(number))|| (parsedNumber <= 0)) {
    return {
      error: true,
      message:"A positive Integer was not entered"
    };
  } 
}