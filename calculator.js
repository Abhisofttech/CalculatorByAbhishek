function num(a) {
   document.getElementById('screen').value += a;
}

function op(a) {
   let screenValue = document.getElementById('screen').value;
   let lastChar = screenValue[screenValue.length - 1];

   // Check if the last character is an operator, if yes, replace it with the new operator
   if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
       document.getElementById('screen').value = screenValue.slice(0, -1) + a;
   } else {
       document.getElementById('screen').value += a;
   }
}

function clear1() {
   document.getElementById('screen').value = '';
}

function total() {
   if (document.getElementById('screen').value == 0) {
       document.getElementById('screen').value = '';
   } else {
       document.getElementById('screen').value = eval(document.getElementById('screen').value);
   }
}
