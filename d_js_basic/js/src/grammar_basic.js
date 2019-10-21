// grammar_basic.js
// javascript 기초이해하기

/** 문법
 * 조건문: 특정한 조건을 이용하여 해당 조건이 참이면 수행하고,
          거짓이면 수행하지 않도록 처리하게 만드는 것
 * 반복문: 2번이상의 반복수행할 경우, 단순반복하여 수행하게 하는 것이 아니라 자동으로 수행하도록 처리
 */

 // 조건문 - 단순분기(하나의 조건을 기준으로 참/거짓), 다수분기(다양한 조건중에 하나)

var myNum = function (par) {
  var i = par;
  var text;
  if (i < 10) {
    text = "주어진 숫자는 10보다 작은 수 입니다.";
  } else if (i === 10) {
    text = "주어진 숫자는 10 입니다.";
  } else {
    text = "주어진 수는 10보다 큰 수 입니다.";
  }
  return console.log(text);
};

myNum(10);
myNum(30);
myNum(5);


// swich case, break, default

var myMenu = function(){

let coffee, text, menu;

menu = [ 'americano', 'latte', 'mocha', 'esspresso', 'coke' ];

coffee = prompt('메뉴입력 부탁쓰 \n 메뉴:' + menu);


switch(coffee){
  case menu[0]:
    text = '얼어죽어도 아이스 아메리카노'
  break;

  case menu[1]:
    text = '커피는 믹스, 부드럽지'
  break;

  case menu[2]:
    text = '크림이 깊고진해'
  break;

  case menu[3]:
    text = '너의 인생처럼 씁쓸하지'
    break;

  case menu[4]:
    text = '마이쪄'
    break;

  default :
    text = '물이 최고임'
  break;
}
console.log(text);
let myP = document.getElementsByTagName('p')[0];
myP.innerHTML = test;

};


var myBtn = document.getElementById('coffeeMenu');
myBtn.addEventListener('click', function(){
  myMenu();
});

