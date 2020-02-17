// Второе задание
// Если хотите проверить какое то задание то разкоменьте это задание что бы его проверить, а потом обратно разкоменьте,
// что бы не мешал другим заданиям.

// Задача 4 Задание 1
// var a1 = document.getElementById('string-1')
// var a2 = document.getElementById('string-2')
// var a3 = document.getElementById('string-3')
// var a4 = document.getElementById('string-4')
// var a5 = document.getElementById('string-5')
// var a6 = document.getElementById('string-6')
// console.log(a3.innerHTML);
// console.log(a5.innerHTML);
// console.log(a2.innerHTML);
// console.log(a4.innerHTML);
// console.log(a6.innerHTML);
// console.log(a3.innerHTML);

// Задача 4 Задание 2

// var element = document.querySelectorAll('.element');
// for(let i = 0; i<=2 ; i++){
//     element[i].style.color = "green";  
      
// }
// for(let i = 3; i<=5 ; i++){
//     element[i].style.color = "red";  
      
// }

// Задача 4 Задание 3

// var tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];



// for (let i = 0; i<5 ; i++) {
//     let liFirst = document.createElement('li');
//     var a = document.getElementById('todo-list');
//     liFirst.innerText = tasks[i];
//     a.appendChild(liFirst);
// }
  
// Задача 4 Задание 4

// for (let p of document.getElementsByTagName('p')) {
//     var a = document.createElement('hr');
//     p.appendChild(a);
// }

// Задача 4 Задание 5
// var elem = document.getElementsByClassName('item');
// elem[1].firstChild.remove();

// function fiveTask(){
//     var cardWrap = document.getElementById('cart-items');
//     var items = document.getElementsByClassName('item');
//     var oldItem = items[4];
//     var papa = oldItem.parentNode;
//     var div = document.createElement('div');
//     var span = document.createElement('span');
//     span.className = "qty";
//     span.innerHTML = "x 4";
//     div.className = "item";
//     div.innerHTML = "Canned Fish ";
//     div.appendChild(span);
//     papa.replaceChild(div,oldItem);
//   }


 
// Задача 4 Задание 6
// function sixTasks(){
//     var button = document.getElementById('addTask');
//     var taskWrap = document.getElementById('myTasks');

//     function createLi(value){
//       var li = document.createElement('li');
//       li.innerText = value;
//       taskWrap.appendChild(li);
//     }
//     function getTask(){
//       var text = prompt("Текст задачи","");
//       if(text.length > 0){
//         createLi(text);
//       }
//     }
//     button.addEventListener('click',getTask);
//   }
//   sixTasks();
