'use strict';
//Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.//
const concatArr1 = [1, 2, 3];
const concatArr2 = [4, 5, 6];
const concatArr = concatArr1.concat(concatArr2);
// console.log(concatArr);

//Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
const arrReverse = [1, 2, 3];
const resultReverse = arrReverse.reverse();
// console.log(resultReverse);

//Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
const arrPush = [1, 2, 3];
arrPush.push(4, 5, 6);
// console.log(arrPush);

//Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
const arrUnshift = [1, 2, 3];
arrUnshift.unshift(4, 5, 6);
// console.log(arrUnshift);

//Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его.
const arrShift = ['js', 'css', 'jq'];
const deleteElement = arrShift.shift();
// console.log(deleteElement);
// console.log(arrShift);

// Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент и удалите его .
const arrPop = ['js', 'css', 'jq'];
const deleteElement2 = arrPop.pop();
// console.log(deleteElement2);
// console.log(arrPop);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
const arrSlice = [1, 2, 3, 4, 5];
const arrSliceResult =  arrSlice.slice(0, 3);
// console.log(arrSliceResult);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
const arrSlice2 = [1, 2, 3, 4, 5];
const arrSliceResult2 = arrSlice2.slice(3, 5);
// console.log(arrSliceResult2);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
const arrSplice1 = [1, 2, 3, 4, 5];
