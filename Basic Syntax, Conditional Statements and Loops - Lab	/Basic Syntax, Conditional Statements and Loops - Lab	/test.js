

/* Write a function, which receives two string arrays and merges them into a third array. */
function merge(a, b) {
  var c = [];
  var i = 0;
  var j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      c.push(a[i]);
      i++;
    } else {
      c.push(b[j]);
      j++;
    }
  }
  while (i < a.length) {
    c.push(a[i]);
    i++;
  }
  while (j < b.length) {
    c.push(b[j]);
    j++;
  }
  return c;
}
/* If the index of the element is even, add into the third array the sum of both elements at that index */
function mergeSum(a, b) {
  var c = [];
  var i = 0;
  var j = 0;
  while (i < a.length && j < b.length) {
    if (i % 2 == 0) {
      c.push(a[i] + b[j]);
    } else {
      c.push(a[i]);
    }
    i++;
    j++;
  }
  while (i < a.length) {
    c.push(a[i]);
    i++;
  }
  while (j < b.length) {
    c.push(b[j]);
    j++;
  }
  return c;
}
/* If the index of the element is odd, add the concatenation of both elements at that index */
function mergeConcat(a, b) {
  var c = [];
  var i = 0;
  var j = 0;
  while (i < a.length && j < b.length) {
    if (i % 2 == 1) {
      c.push(a[i] + b[j]);
    } else {
      c.push(a[i]);
    }
    i++;
    j++;
  }
  while (i < a.length) {
    c.push(a[i]);
    i++;
  }
  while (j < b.length) {
    c.push(b[j]);
    j++;
  }
  return c;
}
/* Input */
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var b = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
/* As input, you will receive two string arrays (with equal length). */
var a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
var b = ['k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'];
/* Output */
merge(a, b);
mergeSum(a, b);
mergeConcat(a, b);
/* As output, you should print the resulting third array, each element separated by " - ". */
merge(a, b).join(' - ');
mergeSum(a, b).join(' - ');
mergeConcat(a, b).join(' - ');