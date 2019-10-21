// grammer_basic_02.js
// 반복문

// while () {}

/*
var n = 0;
console.log(n);

while (n <= 100){
  console.log(n);
  n++;
}

console.log(n)
*/


/*
var n = 0;
do {
  console.log(n);
  n++;
} while(n < 10);
*/




// for () {}

/*
var n = 0;
for (; n <= 10 ;){
  console.log(n);
  n++;
}

for (var n = 0; n <= 10; n++){

}

console.log(n);
*/


/*
// for-in
let arr = ['사과', '배', '바나나', '키위', '오렌지'];

for (let i=0; i < 5; i++){
  console.log(arr[i]);
}
// 배열에서는 for-in을 사용하지 않는다!

let obj = {
  "red" : "사과",
  "yellow" : "바나나",
  "green" : "키위",
  "orange" : "오렌지"
};

for (let i in obj) {
 console.log(obj[i]);

}

// for(let i = 0; i<10; i++ ){} 일반형식, 배열
// for(let i in object){} 객체일때 사용

// [].forEach()
var myArr = ["빨강", "파랑"];

myArr.forEach(function(){
  console.log(data);
});
*/

  // var product = document.getElementById('product');
let product = document.querySelector('#product')
product.style.width = "100%";
product.style.height = "auto";
product.style.monHeight = "300px";
product.style.backgroundColor = "#f96";

let ul = document.createElement('ul');
product.appendChild(ul);
ul = document.querySelector('#product>ul');
ul.style.width = "90%";
ul.style.height = "auto";
ul.style.minHeight = "400px";
ul.style.backgroundColor = "#77f";

let ar = ['우유', '쥬스', '차', '커피', '슬러시', '요거트', '디저트'];
console.log( ar.length );

for(let i=0; i<10; i++){
//  console.log(i); 
 let li = document.createElement('li');
 let myText = document.createTextNode(ar[i]);
 li.appendChild(myText);
 ul.appendChild(li);
}