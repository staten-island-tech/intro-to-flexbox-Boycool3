let number1 = 7;
let number2 = 2;
let number3 = 2;
let number4 = 9;

let bowl1 = 99;
let bowl2 = 1;
let bowl3 = 10;

enter(number1, number2, number3, number4);

function enter(number1, number2, number3, number4) {
  if (number1 === 8 || number1 === 9) {
    if (number2 === number3) {
      if (number4 === 8 || number4 === 9) {
        console.log("ignore");
      }
    }
  } else {
    console.log("accept");
  }
}

bowl(bowl1, bowl2, bowl3)

function bowl(bowl1, bowl2, bowl3) {
  if (bowl1 >= bowl2 && bowl1 <= bowl3 || bowl1 <= bowl2 && bowl1 >= bowl3){
    console.log(bowl1);
  }
  else if(bowl2 >= bowl1 && bowl2 <= bowl3 || bowl2 <= bowl1 && bowl2 >= bowl3){
    console.log(bowl2);
  }
  else if(bowl3 >= bowl1 && bowl3 <= bowl2 || bowl3 <= bowl1 && bowl3 >= bowl2){
    console.log(bowl3);
  }
  else{
    console.log("ermmm what the sigma");
  }
}