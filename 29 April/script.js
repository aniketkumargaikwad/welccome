const cars = ["Mahindra", "Volvo", "BMW"];
      const cars1 = [];
      cars1[0] = "Mahindra";
      cars1[1] = "Volvo";
      cars1[2] = "BMW";

      let car = cars[0];

      document.getElementById("show").innerHTML = cars;
      console.log(typeof cars); //obj

      const str = new String("Obj"); //obj
      const weirdArr = [
        "Mahindra",
        24,
        true,
        { firstName: "Rohan", age: 22 },
        ["A", "B", 26],
      ];
      console.log(weirdArr);
      console.log(weirdArr.length);

      let text = "";
      for (let i = 0; i < cars.length; i++) {
        text += cars[i] + "<br>";
      }
      console.log(text);
      document.getElementById("show").innerHTML = text;

      const person = {
        fname: "Rohan",
        lname: "Dutt",
        age: 22,
      };

      for (let x in person) {
        console.log(x);
        console.log(person[x]);
      }

      const numbers = [45, 4, 9, 16, 25];

      let txt = "";
      numbers.forEach(myFunc);

      function myFunc(value, index, array) {
        if (index > 0) {
          const newVal = value + array[index - 1];
          txt += newVal + ",";
        }
      }

      const table = [19, 38, 57, 76];
      let tableText = "";
      table.forEach(tableFunc);

      function tableFunc(value, index) {
        tableText += `19 x ${index + 1} = ${table[index]} <br>`;
      }
      console.log(tableText);
      document.getElementById("show").innerHTML = tableText;

      console.log(txt);

      // while(condition){

      // }

      // do{

      // }while(condition)

      const fruits = ["Banana", "Orange", "Apple"];
      fruits.push("Kiwi");
      console.log(fruits);

      fruits[8] = "Papaya";
      console.log(fruits);
      // if you give high indexes, it creates holes in the array
      // fruits = [dlihd]  // illegal

      // Difference between array and objects
      //  Arrays are special kind of objects
      // Objects use named indexes whereas arrays use numbered indexes.

      const points = new Array(1, 2, 3, 4); // avoid doing this
      const points2 = [];

      const a1 = new Array(40, 100, 1);
      console.log(a1);
      const a2 = new Array(40, 100); // create an arr with 2 elements, 40 and 100
      console.log(a2);
      const a3 = new Array(40); // create an array with 40 undefined elements
      console.log(a3);

      console.log(fruits.toString());
      console.log(fruits.join("-"));

      console.log(fruits.pop());
      console.log(fruits.pop());
      console.log(fruits);
      console.log(fruits.shift());
      console.log(fruits);
      console.log(fruits.unshift("new-fruit"));
      console.log(fruits);
      delete fruits[2]; //leave holes in the arr, use pop or shift instead

      const arr1 = ["A", "B"];
      const arr2 = ["Z", "Y"];

      const arr12 = arr1.concat(arr2, arr1, arr1);
      console.log(arr12);
      const eg = ["Banana", "Orange", "Apple", "Mango"];
      eg.splice(2, 0, "Lemon", "Kiwi");
      console.log(eg);
      eg.splice(3, 2);
      console.log(eg);

      const eg2 = ["Banana", "Orange", "Apple", "Mango"];
      console.log(eg2);
      const neweg = eg2.slice(1, 3); // starts from 1st index
      console.log(neweg);

      const num = [40, 100, 10, 5, 25, 1];
      console.log(num.sort());

      console.log(
        num.sort(function (a, b) {
          //  if you wanna have numeric ascending order sorting
          return a - b;
        })
      );

      console.log(num.sort(mySortFunc));

      function mySortFunc(a, b) {
        // descending order numeric sorting
        return b - a;
      }

      function myArrMax(arr) {
        return Math.max.apply(null, arr);
      }
      console.log(myArrMax(num));

      const carsArrOfObj = [
        {
          type: "Volvo",
          year: 2016,
        },
        {
          type: "Saab",
          year: 2017,
        },
        {
          type: "BMW",
          year: 2010,
        },
      ];
      const newarr = carsArrOfObj.sort(function(a,b){
          return a.year-b.year
      })
      console.log(newarr)

      const numbers1 = [45,4,9,16,25]
      const numbers2 = numbers1.map(mul)

      function mul(value,index,array){
        return value*2
      }
      console.log(numbers2)

      const over18 = numbers1.filter(filterFunc)

      function filterFunc(value,index,array){
          return value>18
      }
      console.log(over18)