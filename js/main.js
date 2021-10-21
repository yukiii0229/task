console.log ("hello")

const array = [2, 4, 7, 5, 4, 3, 8];
const result = array.filter(function(x, i, self) {
        return self.indexOf(x) === i;
    });
  
  console.log(result);
  


function LeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}

let checkYear = 2020;
if (LeapYear(checkYear)) {
  console.log('うるう年です');
} else {
  console.log('うるう年ではありません');
}


let checkYear1 = 2021;
if (LeapYear(checkYear1)) {
  console.log('うるう年です');
} else {
  console.log('うるう年ではありません');
}
