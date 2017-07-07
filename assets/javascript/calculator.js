var number = '';
var newNumber = '';
var operator = '';
var total = $("#total");
total.text('0');


var textNumLength = function(number) {
  if(number.length > 14) {
    number = '';
    total.text("Err");
  }
};

$("#numbers button").not("#clear, #clearall").click( function() {
  number += $(this).text();
  total.text(number);
  textNumLength(number);
});

$("#operators button").click(function() {
  operator = $(this).text();
  newNumber = number;
  number = '';
  total.text(newNumber);
  textNumLength(number);
});

$("#clear, #clearall").click(function() {
  number = '';
  total.text('0');

  if($(this).attr("id") === "clearall") {
    newNumber = '';
  }
});

$("#decimal").click(function() {
  var newDecs = 0;

  for(var i = 0; i < number.length; i++) {
    if(number[i] === ".") {
      newDecs++;
    }
  }

  if(newDecs > 0) {
    number = number;
    total.text(number);
  } else {
    number +=".";
    total.text(number);
  }

  textNumLength(number);
});

$("#equals").click(function() {
  newNumber = parseFloat(newNumber, 10);
  number = parseFloat(number, 10);

  if (operator === "+"){
    number = (newNumber + number).toString(10);
  } else if (operator === "-"){
    number = (newNumber - number).toString(10);
  } else if (operator === "÷"){
    number = (newNumber / number).toString(10);
  } else if (operator === "x"){
    number = (newNumber * number).toString(10);
  }
  // } else if (operator === "sqrt") {
  //   number = Math.sqrt(parseFloat(number,10)).toString(10);
  // }
  // } else if (operator === "^") {
  //     number =  (parseFloat(newnumber, 10).Math.pow(newnumber,number)).toString(10);
  // }

  total.text(number);
  textNumLength(number);
  number = '';
  newNumber = '';
});






























// var testNumLength = function(number) {
//   if (number.length > 15) {
//     number = "";
//     total.text("Err");
//   }
// };

// $("#numbers button").not("#clearall, #clear").click(function() {
//   number += $(this).text();
//   total.text(number);
//   testNumLength(number);
// });

// $("#operators button").click(function() {
//   operator = $(this).text();
//   newNumber = number;
//   number="";
//   total.text(newNumber);
// });

// $("#clear, #clearall").click(function() {
//   number = '';
//   total.text("0");

//   if($(this).attr("id") === "clearall") {
//     newNumber === '';
//   }
// });

// $("#equals").click(function() {
//   newNumber = parseFloat(newNumber, 10);
//   number = parseFloat(number, 10);

//   if (operator === "+"){
//     number = (newNumber + number).toString(10);
//   } else if (operator === "-"){
//     number = (newNumber - number).toString(10);
//   } else if (operator === "÷"){
//     number = (newNumber / number).toString(10);
//   } else if (operator === "x"){
//     number = (newNumber * number).toString(10);
//   }
//   // } else if (operator === "sqrt") {
//   //   number = Math.sqrt(parseFloat(number,10)).toString(10);
//   // }
//   // } else if (operator === "^") {
//   //     number =  (parseFloat(newnumber, 10).Math.pow(newnumber,number)).toString(10);
//   // }

//   total.text(number);
//   testNumLength(number);
//   number = '';
//   newNumber = '';
// });

// $("#decimal").click(function() {
//   var numOfDecs = 0;

//   for (var i = 0; i < number.length; i++) {
//       if(number[i] === '.') {
//           numOfDecs ++;

//       }
//   }

//   if(numOfDecs > 0) {
//       number = number;
//       total.text(number);
//   } else {
//       number += ".";
//       total.text(number);
//   }

//   testNumLength(number);

// });



