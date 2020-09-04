const dataArr = [
  'cat', 'act',
  'rome', 'more',
  'hello',
  'limes', 'slime', 'smile',
  ]
let resultArr = {};
let tmpArr = []

function isAnogramm(arg1, arg2) {

  for(let i = 0; i < arg1.length; i++) {
    if (!arg2.toLowerCase().includes(arg1.toLowerCase().charAt(i))) {
      return false;
    }
  }
  return true;
}

for (let i = 0; i < dataArr.length; i++) {
  if (tmpArr.includes(i)) {
    continue
  }
  resultArr[dataArr[i]] = 0;
  for (let j = i + 1; j < dataArr.length; j++) { 
    if (dataArr[i].length === dataArr[j].length && isAnogramm(dataArr[i], dataArr[j])) {
        resultArr[dataArr[i]] += 1;
        // resultArr[dataArr[i]] = resultArr[dataArr[i]] ? 0 : resultArr[dataArr[i]]++;

        tmpArr.push(j);
    }
  }
}

console.log('resultArr', resultArr);