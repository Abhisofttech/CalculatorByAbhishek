function num(a) {
   document.getElementById('screen').value += a;

}
function op(a) {
   document.getElementById('screen').value += a;

}
function clear1() {
   document.getElementById('screen').value = ' ';

}
function total() {
   if (document.getElementById('screen').value == 0) {
      document.getElementById('screen').value = '';
   } else {
      document.getElementById('screen').value = eval(document.getElementById('screen').value);
   }
}