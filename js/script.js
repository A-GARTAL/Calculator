let $ = document;
let bodyElem = $.querySelector("body").addEventListener("keydown",keyboardAction);
let input = $.getElementById("result");
let numbersAndActions = ["0","1","2","3","4","5","6","7","8","9",".","=","+","*","**","/","-","%","Backspace","Enter","C","CE",];
let li1 = $.querySelector(".ce"),li2 = $.querySelector(".power"),li3 = $.querySelector(".rem"),li4 = $.querySelector(".nine"),li5 = $.querySelector(".eight"),li6 = $.querySelector(".seven"),li7 = $.querySelector(".six"),li8 = $.querySelector(".five"),li9 = $.querySelector(".four"),li10 = $.querySelector(".three"),
li11 = $.querySelector(".two"),li12 = $.querySelector(".one"),li13 = $.querySelector(".equal"),li14 = $.querySelector(".zero"),li15 = $.querySelector(".dot"),li16 = $.querySelector(".comp"),li17 = $.querySelector(".minus"),li18 = $.querySelector(".division"),li19 = $.querySelector(".multi"),li20 = $.querySelector(".plus"),
lis = [li1,li2,li3,li4,li5,li6,li7,li8,li9,li10,li11,li12,li13,li14,li15,li16,li17,li18,li19,li20,];
for (let i = 0; i < lis.length; i++) {
  lis[i].addEventListener("click", btnDetect);
}
let firstNumber = "",secondNumber = "",action,actionCounter = 0,incomeBtn = "";

function keyboardAction(event){
  let keyValue = event.key;
  actionDetect(keyValue);
}

function mergeNumbers(op) {
  switch (op) {
    case "+":
      firstNumber = Number(firstNumber) + Number(secondNumber);
      break;
    case "-":
      firstNumber = Number(firstNumber) - Number(secondNumber);
      break;
    case "*":
      firstNumber = Number(firstNumber) * Number(secondNumber);
      break;
    case "/":
      firstNumber = Number(firstNumber) / Number(secondNumber);
      break;
    case "%":
      firstNumber = Number(firstNumber) % Number(secondNumber);
      break;
    case "**":
      firstNumber = Number(firstNumber) ** Number(secondNumber);
      break;
    case "C":
      firstNumber = "";
      secondNumber = "";
      input.value = "";
      break;
    case "CE":
      secondNumber = "";
      input.value = "";
      break;
  }
  firstNumber = String(firstNumber);
  secondNumber = "";
  console.log("merge");
  return firstNumber;
}

function btnDetect(event) {
  let liElem = event.target;
  incomeBtn = liElem.innerHTML;
  if (incomeBtn == "÷") incomeBtn = "/";
  if (incomeBtn == "×") incomeBtn = "*";
  if (incomeBtn == "∧") incomeBtn = "**";
  if (incomeBtn == "−") incomeBtn = "-";
  actionDetect(incomeBtn);
}


function actionDetect(incomeAction) {
  let isAction = false,isNumber = false;
  for (let i = 0; i < numbersAndActions.length; i++) {
    if (incomeAction == numbersAndActions[i]) {
      if (i < 10) isNumber = true;
      else isAction = true;
    }
  }
  if (isNumber) {
    if (actionCounter == 0) {
      firstNumber += incomeAction;
      input.value = firstNumber;
    }
    if (actionCounter == 1) {
      input.value = "";
      secondNumber += incomeAction;
      input.value = secondNumber;
    }
  }
  if (isAction && firstNumber.length > 0) {
    if (secondNumber.length == 0) {
      if (incomeAction == "=" ||incomeAction == "Enter" ||incomeAction == "Backspace")
        {
        actionCounter = 1;
      }
       else {
              actionCounter = 1;
              action = incomeAction;
        if (incomeAction == "C" || incomeAction == "CE")
        {
          mergeNumbers(action);
          actionCounter = 0;
          action = "";
        }
      }
    } else {
      if (incomeAction == "C" || incomeAction == "CE")
        {
        mergeNumbers(incomeAction);
        actionCounter = 1;
      }
      else 
      input.value = mergeNumbers(action);
      secondNumber = "";
      action = incomeAction;
      actionCounter = 1;
    }
  }
}