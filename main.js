/******************
 * YOUR CODE HERE *
 ******************/

function getFirstItemFrom(array){
  return array[0]
}
function getLastItemFrom(array2){
  return array2[array2.length - 1]
}
function getIndex3(array3){
  if (array3.length > 4){
    return array3[3]
  } else {
    return array3[array3.length - 1]
  }
}
function isLongList(array4){
  return array4.length > 10 || array4.length === 10
}

function firstItemIsNumber(array5){
  return typeof array5[0] === 'number'
}

function secondCharOfThirdString(array6){
  return array6[2][1]
}
 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/



if (typeof getFirstItemFrom === 'undefined') {
  getFirstItemFrom = undefined;
}


if (typeof getLastItemFrom === 'undefined') {
  getLastItemFrom = undefined;
}



if (typeof getIndex3 === 'undefined') {
  getIndex3 = undefined;
}


if (typeof firstItemIsNumber === 'undefined') {
  firstItemIsNumber = undefined;
}


if (typeof isLongList === 'undefined') {
  isLongList = undefined;
}


if (typeof secondCharOfThirdString === 'undefined') {
  secondCharOfThirdString = undefined;
}




module.exports = {
  getLastItemFrom,
  getFirstItemFrom,
  getIndex3,
  firstItemIsNumber,
  isLongList,
  secondCharOfThirdString,
}
