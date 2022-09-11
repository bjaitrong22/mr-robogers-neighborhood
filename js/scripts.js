
// Business logic 

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
  const numberString = arrayValues.toString().split(",");
  const outArrayString =  replaceElements(numberString);
  
  return outArrayString;
}

function replaceElements(numberString) {

  const subFor1s = "Beep!";
  const subFor2s = "Boop!";
  const subFor3s = "Won't you be my neighbor?";

  const outputString = numberString.map (function (element) {  
    if (element.includes(3)) {
      return subFor3s;

    } else if (element.includes(2)) {
        return subFor2s;
      
    } else if (element.includes(1)) {
        return subFor1s;
    
    } else {      
        return element;
    }  
  });

return outputString;
}

// UI logic



window.addEventListener("load", function() {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});
