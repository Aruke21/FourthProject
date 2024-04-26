// var obj = {
//     key: "value",
//     keyTwo: "value two",
// }

//console.log(Object.keys(obj));
//console.log(Object.values(obj));
//console.log(Object.entries(obj));

//var arr = ["one","book","Bishkek"];

// console.log(arr.length);

// if([].length){
//     //0
//     console.log("true");
// } else{
//     console.log("false");
// }

// console.log(arr.shift()); //убирает первый элемент
// arr.push("hello", false, {a: "2"}); //добавляет элементы в конец
// console.log(arr.pop()); //удаляет последний элемент
// arr.unshift(546); //добавляет элементы в начало

// console.log(arr.slice(2, 4)); //копирует часть массива
// console.log(arr.splice(2,1)); //вырезает часть массива

// console.log(
//     arr.forEach( function(item, index){
//         //перебирает массив и не возвращает
//         //console.log(item, index);
//         console.log(item + "test");
//     })
// )

// console.log(arr);

// //return

// function myFunk(){
//     return "hello";
// }

// console.log(myFunk());

// var months = ["Jan", "Feb", "March", "Apr", "May"]
// var arr = [];

// for(var i = 0; i < months.length; i++){
//     arr.push(months[i] + i);
//     months{i} = months{i} + i;
//     i = i + 1 ++;
//     months[i] += i;
// }

// console.log(months);
// console.log(arr);

// var months = ["Jan", "Feb", "March", "Apr", "May"];
// var arr = [];

// for(var i = 0; i < months.length; i++){
//     arr.unshift(months[i]);
// }
// console.log(months);
// console.log(arr);


// var obj = {
//     key: "value",
//     name: "Aruke",
// };
// console.log(Object.keys(obj));
// keys values entries

// console.log("Aruke hello".split("u").join("u"));
// console.log([1,2,3,4,5,false,{ a: 1}].join(" ").split(" "));

// function arg1 = length, arg2 = value return Array
// (4, b) => [b, b, b, b]

// 1 - make a function
// 2 - add params 
// function ArrayMaker(length, value){
//     var newArr = [];
//     for(var i = 0; i < length; i++){
//     newArr.push(value);
//     }
//     return newArr;
// }
// console.log(ArrayMaker(5, "cake"));

// [1, 0, true, false, "hello", ""] => (1, true, "hello")
// 1 - make a function;
// 2 - create an Array;

// function arrFilter(arr){
//     console.log(arr);
//     var newArr = [];
//     arr.forEach(function (item){
//       if (item){
//         newArr.push(item);
//       }
//     });
//     return newArr;
// }
// var arr = ["", 12, false, 0, true];
// console.log(arrFilter(arr));

// console.log("aruke".toUpperCase().toLowerCase());

// "hello" => "HEllo"
// 1 - make a funk
// 2 - add arg/param
// 3 - make an arr from str
// 4 - check if el index less then 2
// 5 - return string

// function toUpperFirstLetter(string){
//     var newArr = [];
//     // for(var i = 0; i <2;)
//     string.split("").forEach(function (item, index){
//         if(index <= 1){
//             newArr.push(item.toUpperCase());
//         } else{
//             newArr.push(item.toLowerCase());
//         }
//     });
//     return newArr.join("");
// }

// console.log(toUpperFirstLetter("HELLO"));

// function myFunk(){
//     return "5"
// }
// console.log(typeof myFunk);

// var obj = {
//     key: "value",
//     key2: "value2"
// }
// console.log(Object.entries(obj));


// var arr =[]
// arr.push("1", "",)


// var arr = ["peony", "rose", "lily", "popy"]
// var newArr = arr.map(function(item, index){
//     return item + index
// })

// console.log(arr)
// console.log(newArr)


// [1, 12, "", "allo", false, {}]

// var arr = [1, 12, "", "allo", false, {}]
// function myFunk (filterArr){
//     var arr = {}
//     filterArr.forEach(function(item){
//         if(item){
//             arr.push(item)
//         }
//     })
//     return arr
// }
// console.log(arr)
// console.log(myFunk(arr))


// var arr = [1, 12, "good", "allo", false, {}, "zip", ""]
// var newArr = arr.filter(function(item){
//     return !item
// }).map(function(item){
//     return !item
// })
// console.log(arr)
// console.log(newArr)


// var data = [["a", 1], ["b", 2]];
// // {"a": 1, "b": 2}
// function myFunk(arr){
//     var obj = {}
//     arr.forEach(function(item){
//         console.log(item)
//         obj[item[0]] = item[1]
//     })
//     return obj
// }
// console.log(myFunk(data))


// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// function myFunk(arr){
//    var sun = 0
//    arr.forEach(function(item){
//     sun = sun + item
//    })
//    return sun
// }
// console.log(myFunk(arr))


// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// var sun = arr.reduce(function(acc, curr){
//     console.log(acc, curr)
//     return acc + curr
// }, 0)

// console.log(arr)
// console.log(sun)


// var arr = [
//     [1, 4, 8],
//     [5, 19, 0],
//     [6, 3, 1]
// ]
// // 1 создаем новый массив
// // 2 посчитать результат
// function myFunk(oldArr){
//     var newArr = []
//     oldArr.forEach(function(item){
//         item.forEach(function(item){
//             newArr.push(item)
//         })
//     })
//     return newArr.reduce(function(acc, curr){
//         return acc + curr
//     }, 0)
// }
// console.log(myFunk(arr))


// var myObj = {
//     name: "Aruke",
//     number: 3
// }
// for(var prop in myObj){
//     console.log(prop)
// }


// var people = {
//     John: {
//         age: 16,
//         parents: {
//             Scott: {
//                 age: 41
//             },
//             parents: {
//                 logan:{
//                     age: 70,
//                 }
//             },
//             Mary: {
//                 age: 36
//             }
//         }
//     },
//     Sam: {
//         age: 17,
//         parents: {
//             Stive: {
//                 age: 43
//             },
//             Ann: {
//                 age: 38
//             }
//         }
//     },
// }

// function parentList (obj){
//     if(obj.parents){
//         for(var parent in obj.parents){
//             console.log(parent)
//             if(obj.parents[parent].parents){
//             parentList(obj.parents[parent])
//             }
//         }
//     }else{
//         console.log("not found!")
//     }
// }

// for(var key in people){
//     parentList(people[key])
// }



function fromPairs(arr) {
    return Object.fromEntries(arr);
  }
  const data = [['a', 1], ['b', 2]];
  console.log(fromPairs(data)); // { 'a': 1, 'b': 2 } должен быть таким
  
  
  function without(arr, ...args) {
    return arr.filter(item => !args.includes(item));
  }
  const data2 = [1, 2, 3, 1, 2];
  console.log(without(data2, 1, 2)); // [3] ответ
  
  
  function unique(arr) {
    return Array.from(new Set(arr));
  }
  const data3 = [1, 2, 1, 2, 3];
  console.log(unique(data3)); // [1, 2, 3] ответ