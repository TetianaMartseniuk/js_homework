//HW2
  //2.2 Создать функцию которая выведет многомерный массив A. Данный массив содержит в себе список других массивов B. Массивы B должны содержать по 3 значения. Максимальное значение (в примере это переменная amount) должно делится на 3 нацело.
 
function getArray(amount){
let result = [];
 for (let i=1; i <= amount; i = i + 3){
        result.push([i, i + 1, i + 2])
  }  
  return console.log(result)

}

 getArray(12) // выведет в консоль [ [1,2,3], [4,5,6], [7,8,9], [10,11,12] ]
 