// Второе задание
// Если хотите проверить какое то задание то разкоменьте это задание что бы его проверить, а потом обратно разкоменьте,
// что бы не мешал другим заданиям.


// 1)


// let date = new Date();
// let weekday=new Array(7);
// weekday[0]="Sunday";
// weekday[1]="Monday";
// weekday[2]="Tuesday";
// weekday[3]="Wednesday";
// weekday[4]="Thursday";
// weekday[5]="Friday";
// weekday[6]="Saturday";
// console.log("Today is: " + weekday[date.getDay()]);
// date.setHours(4);
// console.log(`Current time is : ${date.getHours()}${date.getHours() > 0 && 13 > date.getHours() ? " AM " : " PM "} ${date.getMinutes()} : ${date.getSeconds()} `);





// 2)


// let num = prompt('Введите число');
// alert(num.split("").reverse().join(""));


// 3)


// let factorial = 1;
// let n = prompt("Введите число");
// let i=0;
// while ( n != 0) {
//     factorial *= n;
//     n--
    
// }
// console.log(factorial);


// 4)

// let a = prompt("Введите первое число");
// let b = prompt("Введите второе число ");

// console.log(`${a > b ? a: b} больше чем второе число.`);


// 5)

// let color = ["Red", "Green", "White", "Black"];


// console.log(color.join(','));
// console.log(color.join('+'));


// 6)
// function upper_case(str)
// {
//    regexp = /^[A-Z]/;
//    if (regexp.test(str))
//     {
//       console.log("String's first character is uppercase");
//     } 
//     else
//     {
//       console.log("String's first character is not uppercase");
//     }
// }
// upper_case('Kamaldin');
// upper_case('kamaldin');




// 7)
// let date = new Date;
// let month = ['January', 'February','March','April','May','June', 'July','August','September','October','November','December'];
// console.log(month[date.getMonth()]);

// 7)

// let canv = document.getElementById('canvas');
// var ctx = canv.getContext("2d");

// // Голова
// ctx.fillStyle = "yellow";
// ctx.strokeStyle="black";
// ctx.beginPath();
// ctx.arc(400,300,130,0,Math.PI*2,false)
// ctx.closePath();
// ctx.fill();
// ctx.stroke();

// //Глаза
// ctx.fillStyle = "black";
// ctx.beginPath();
// ctx.arc(340,250,20,0,Math.PI*2,false)
// ctx.closePath();
// ctx.fill();
// ctx.fillStyle = "black";
// ctx.beginPath();
// ctx.arc(450,250,20,0,Math.PI*2,false)
// ctx.closePath();
// ctx.fill();
// // Рот
// ctx.strokeStyle="black";
// ctx.beginPath();
// ctx.arc(400,340,70,0,Math.PI,false)
// ctx.closePath();
// ctx.fill();
// ctx.stroke();
// //Зрачки
// ctx.fillStyle = "white";
// ctx.beginPath();
// ctx.arc(340,250,7,0,Math.PI*2,false)
// ctx.closePath();
// ctx.fill();
// ctx.fillStyle = "white";
// ctx.beginPath();
// ctx.arc(450,250,7,0,Math.PI*2,false)

// ctx.fill();
// ctx.closePath();




