//1
function getAllElementsButNth(array, n) {
  elementsButNth = array.filter(function(element, index){
    return index !== n;
  });
  return elementsButNth;
}


//2
function getElementsThatEqual10AtProperty(obj, key) {
  var array = obj[key];
    if(!(key in obj) || Array.isArray(array) === false) {
        return [];
    }
    equalToTen = array.filter(function(element, index){
      return element === 10;
    });
  return equalToTen;
}

//3
function select(arr, obj) {
  var newObj = {};
    arr.forEach(function(element, index) {
      if (obj.hasOwnProperty(element)) {
        newObj[element] = obj[element];
      }
    });
  return newObj;
}

var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

select(arr, obj);

//4
function getElementsLessThan100AtProperty(obj, key) {
  var array = obj[key]; 
    if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length === 0) {
      return [];
    } 
    return array.filter(function(element){
      return element < 100;
    });
}

var obj = {
  key: [1000, 20, 50, 500]
};

getElementsLessThan100AtProperty(obj, 'key');

//5
function getElementsGreaterThan10AtProperty(obj, key) {
  var array = obj[key];
    if(!(key in obj) || !Array.isArray(obj[key])) {
        return [];
    }
    greaterThan10 = array.filter(function(element){
      return element > 10;
    });
  return greaterThan10;
}

//6
function removeElement(array, discarder) {
  return array.filter(function(element){
    return element !== discarder;
  });
}

removeElement([2,2,2,2,1], 2);

//7
function keep(array, keeper) {
  return array.filter(function(element){
    return element === keeper;
  });
}

keep([1,2,3,4,3], 9);

//8
function getOddLengthWordsAtProperty(obj, key) {
  var array = obj[key];
    if(!obj[key] || !Array.isArray(obj[key])) {
        return [];
    } 
    return array.filter(function(element){
      if(element.length % 2 !== 0){
        return element; 
      }
    });
}

//9
function computeAverageOfNumbers(nums) {
  if (nums.length === 0) {
    return 0;
  } 
  return nums.reduce(function(acc, cur){
    return (acc + cur);
  }, 0) / nums.length;
}

var input = [1,2,3,4,5];
computeAverageOfNumbers(input);

//10
function getAverageOfElementsAtProperty(obj, key) {
  var array = obj[key];
    if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length < 1) {
        return 0;
    } 
    return array.reduce(function(acc, cur){
      return acc + cur;
    }, 0) / array.length;
}

//11
function getEvenLengthWordsAtProperty(obj, key) {
  var array = obj[key];
  if (!obj[key] || !Array.isArray(obj[key])) {
      return [];
  }
  return array.filter(function(element){
    if(element.length % 2 === 0){
      return element;
    }
  });
}

//12
function filterOddLengthWords(words) {
  return words.filter(function(word){
    if(word.length % 2 !== 0) {
      return word;
    }
  });
}

//13
function getSquaredElementsAtProperty(obj, key) {
  var array = obj[key];
    if(!Array.isArray(obj[key]) || obj[key].length < 1) {
      return [];
    }
    return array.map(function(element){
      return element * element; 
    });
}

var obj = {
  key: [2, 1, 5]
};

getSquaredElementsAtProperty(obj, 'key');

//14
function getOddElementsAtProperty(obj, key) {
  var array = obj[key];
    if(!(key in obj) || !Array.isArray(obj[key])) {
      return [];
    }
  return array.filter(function(element){
    return element % 2 !== 0;
  });
}

//15
function getEvenElementsAtProperty(obj, key) {
  var array = obj[key];
	if(!(key in obj) || !Array.isArray(obj[key])) {
	    return [];
	}
  return array.filter(function(element){
  	return element % 2 === 0;
  });
}

//16
function filterEvenLengthWords(words) {
  return words.filter(function(word){
  	if(word.length % 2 === 0) {
  	  return word;
  	}
  });
}

//17
function getLengthOfLongestElement(arr) {
  newArr = arr.map(function(element){
    return element.length;
  });
  return newArr.reduce(function(acc, cur){
    if(cur > acc) {
      acc = cur;
    }
    return acc;
  }, 0);
}

getLengthOfLongestElement(['one', 'two', 'three']);

//18
function getSmallestElementAtProperty(obj, key) {
  var array = obj[key];
    if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length < 1) {
      return;
    } 
    return array.reduce(function(acc, cur){
      if(acc > cur) {
        acc = cur;
      }
      return acc;
    }, Number.POSITIVE_INFINITY); 
}

var obj = {
  key: [2, 1, 5]
};

getSmallestElementAtProperty(obj, 'key');

//19
function getLargestElementAtProperty(obj, key) {
  var array = obj[key];
    if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length < 1) {
        return;
    } 
    return array.reduce(function(acc, cur){
      if(acc < cur) {
        acc = cur;
      }
      return acc;
    }, Number.NEGATIVE_INFINITY);
}

//20
function squareElements(arr) {
  return arr.map(function(element) {
    return element * element;
  });
}

//21
function filterOddElements(arr) {
  return arr.filter(function(element){
  	return element % 2 !== 0;
  });
}

//22
function computeProductOfAllElements(arr) {
  if (arr.length === 0) {
	return 0;
  }
  return arr.reduce(function(acc, cur){
  	return acc * cur;
  }, 1); 
}

//23
function filterEvenElements(arr) {
  return arr.filter(function(element){
  	return element % 2 === 0;
  });
}

//24
function getLengthOfShortestElement(arr) {
  if(arr.length === 0){
    return 0;
  }
  newArr = arr.map(function(element){
      return element.length;
  });
  return newArr.reduce(function(acc, cur){
    if(cur < acc) {
      acc = cur;
    }
    return acc;
  });
}
getLengthOfShortestElement([]);

//25
function getLongestElement(arr) {
  var newArr = arr.reverse();
    return newArr.reduce(function (acc, cur) { 
      return cur.length < acc.length ? acc : cur; 
    }, 0);
}

//26
function findSmallestElement(arr) {
  return arr.reduce(function(acc, cur){
    if(cur < acc){
      acc = cur;
    }
    return acc;
  });
}

//27
function findShortestElement(arr) {
  var newArr = arr.reverse();
    return newArr.reduce(function (acc, cur) { 
      return cur.length > acc.length ? acc : cur; 
    }, 0);
}

//28
function getLargestElement(arr) {
  return arr.reduce(function(acc, cur){
    if(cur > acc){
      acc = cur;
    }
    return acc;
  });
}

//29
function computeSumOfAllElements(arr) {
  return arr.reduce(function(acc, cur){
  	return acc + cur;
  }, 0);
}

//30
function getProductOfAllElementsAtProperty(obj, key) {
  var array = obj[key];
  if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length < 1){
      return 0;
  } 
  return array.reduce(function(acc, cur){
  	return acc * cur;
  }, 1);
}

//31
function sumDigits(num) {
  var sum = [];
    if (num < 0) {
      var absolute = Math.abs(num);
        while((Math.log(absolute) * Math.LOG10E + 1 | 0) > 1) {
          sum.push(absolute % 10);
          absolute = Math.floor(absolute / 10);
        }
      sum.push(absolute * (-1));
    } else {
        while(num > 0) {
          sum.push(num % 10);
          num = Math.floor(num / 10);
        }
    }
    return sum.reduce(function(acc, cur){
      return acc + cur;
    }, 0);
}

sumDigits(-316);

//32
function getSumOfAllElementsAtProperty(obj, key) {
  var array = obj[key];
  if (!obj[key] || !Array.isArray(obj[key])){
      return 0;
  }
  return array.reduce(function(acc, cur){
  	return acc + cur;
  }, 0);
}

//33
function findShortestWordAmongMixedElements(arr) {
  var newArr = arr.filter(function(element){
    return typeof element === 'string';
  });
  if (newArr.length === 0) {
      return '';
  }
  var reverseArr = newArr.reverse();
    return reverseArr.reduce(function (acc, cur) { 
      return cur.length > acc.length ? acc : cur; 
    }, 0);
}

//34
function findSmallestNumberAmongMixedElements(arr) {
  var newArr = arr.filter(function(element){
    return typeof element === 'number';
  });
  if (newArr.length === 0) {
      return 0;
  }
  return newArr.reduce(function(acc, cur){
    if (acc > cur){
      acc = cur;
    }
    return acc;
  });
}

findSmallestNumberAmongMixedElements([true, 12, 3, "we"]);

//35
function getLongestWordOfMixedElements(arr) {
  var newArr = arr.filter(function(element){
    return typeof element === 'string';
  });
  if (newArr.length === 0) {
      return '';
  }
  var reverseArr = newArr.reverse();
    return reverseArr.reduce(function (acc, cur) { 
      return cur.length < acc.length ? acc : cur; 
    }, 0);
}

//36
function getLargestNumberAmongMixedElements(arr) { 
  var newArr = arr.filter(function(element){
    return typeof element === 'number';
  });
  if (newArr.length === 0) {
      return 0;
  }
  return newArr.reduce(function(acc, cur){
    if (acc < cur){
      acc = cur;
    }
    return acc;
  });
}

getLargestNumberAmongMixedElements([true, 12, 3, "we"]);

//37
function getLongestOfThreeWords(word1, word2, word3) {
  var words = [word3, word2, word1];
    return words.reduce(function (acc, cur) { 
      return cur.length < acc.length ? acc : cur; 
    }, 0);
}

//38
function findShortestOfThreeWords(word1, word2, word3) {
  var words = [word3, word2, word1];
    return words.reduce(function (acc, cur) { 
      return cur.length > acc.length ? acc : cur; 
    }, 0);
}













