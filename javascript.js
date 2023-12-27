var count = 0;

function changeCount(firstNum) {
  count += firstNum;
  document.getElementById("count").innerHTML = count;
}