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
const arrSliceResult = arrSlice.slice(0, 3);
// console.log(arrSliceResult);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
const arrSlice2 = [1, 2, 3, 4, 5];
const arrSliceResult2 = arrSlice2.slice(3, 5);
// console.log(arrSliceResult2);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
const arrSplice1 = [1, 2, 3, 4, 5];
arrSplice1.splice(1, 2);
// console.log(arrSplice1);

//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4]
const arrSplice2 = [1, 2, 3, 4, 5];
const arrResultSplice2 = arrSplice2.splice(1, 3);
// console.log(arrResultSplice2);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
const arrSplice3 = [1, 2, 3, 4, 5];
arrSplice3.splice(3, 0, 'a', 'b', 'c');
// console.log(arrSplice3);

//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

const arrSplice4 = [1, 2, 3, 4, 5];
arrSplice4.splice(1, 0, 'a', 'b');
arrSplice4.splice(6, 0, 'c');
arrSplice4.splice(9, 0, 'e');
// console.log(arrSplice4)


// Дан массив [3, 4, 1, 12, 7]. Отсортируйте его.
const arrSort = [3, 4, 1, 12, 7];
arrSort.sort(function (var1, var2) {
    return var1 - var2;
});
// console.log(arrSort);

// Дан массив со следующими объектами внутри:                      
// {firstName: ‘Test’, lastName: ’Testovich’, age: 42, gender: ‘male’,},             
// {firstName: ‘User’, lastName: ’Userovich’, age: 12, gender: ‘male’,},        
// {firstName: ‘Test`ya’, lastName: ’Testovna’, age: 16, gender: ‘female’,},        
// {firstName: ‘Logina’, lastName: ’Consol`evna’, age: 42, gender: ‘female’,}         
// Для каждого элемента выведите сообщение в консоль типа 
// “Пользователь (имя) (фамилия) является (пол) и ему сейчас (возраст) лет”

const arrWithObject = [
    { firstName: 'Test', lastName: 'Testovich', age: 42, gender: 'male', },
    { firstName: 'User', lastName: 'Userovich', age: 12, gender: 'male', },
    { firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female', },
    { firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female', }
];

// arrWithObject.forEach(function (element) {
//     console.log(`Пользователь ${element.firstName} ${element.lastName} является ${element.gender} и ему сейчас ${element.age} лет`)
// });


// Дан массив со следующими объектами внутри:                      
// {firstName: ‘Test’, lastName: ’Testovich’, age: 42, gender: ‘male’,},             
// {firstName: ‘User’, lastName: ’Userovich’, age: 12, gender: ‘male’,},        
// {firstName: ‘Test`ya’, lastName: ’Testovna’, age: 16, gender: ‘female’,},        
// {firstName: ‘Logina’, lastName: ’Consol`evna’, age: 42, gender: ‘female’,}        
// Создайте новый массив на основании старого массива, 
// добавив каждому пользователю в новом массиве свойство telephoneNumber которое может быть или строкой или числом (на ваше усмотрение).

const arrWithMap = [
    { firstName: 'Test', lastName: 'Testovich', age: 42, gender: 'male', },
    { firstName: 'User', lastName: 'Userovich', age: 12, gender: 'male', },
    { firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female', },
    { firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female', }
];

const resultArrMap = arrWithMap.map(function(element){
    const telephoneNumber = structuredClone(element);
    telephoneNumber.teleN = Math.round(Math.random() * (1000000000 - 1000000) + 1000000);
    return telephoneNumber;
});

// console.log(resultArrMap);