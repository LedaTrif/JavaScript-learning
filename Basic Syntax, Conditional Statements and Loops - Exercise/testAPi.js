function findTopIntegers(arr) {
    var topIntegers = [];
    for (var i = 0; i < arr.length; i++) {
      var isTopInteger = true;
      for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] <= arr[j]) {
          isTopInteger = false;
          break;
        }
      }
      if (isTopInteger) {
        topIntegers.push(arr[i]);
      }
    }
    return topIntegers;
  }
  /* Output */
  console.log(findTopIntegers([1, 4, 3, 2]));
  console.log(findTopIntegers([14, 24, 3, 19, 15, 17]));
  console.log(findTopIntegers([41, 41, 34, 20]));
  console.log(findTopIntegers([27, 19, 42, 2, 13, 45, 48]));