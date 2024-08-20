let $ = document;
let bodyElem = $.querySelector('body').addEventListener('keydown' , keyboardAction);
let input = $.getElementById('result');

let numbersAndActions = ['0','1','2','3','4','5','6','7','8','9','.','=','+','*','**','/','-','%','Backspace','Enter','C','CE']
let result , firstNumber='' , secondNumber='' , action , actionCounter = 0 , incomeBtn = '';

function keyboardAction(event){
    let isAction=false , isNumber=false;
    let btn = event.key;
    console.log(incomeBtn)
    console.log(event.key)
    for(let i=0 ; i<numbersAndActions.length ; i++)
    {
        if(btn == numbersAndActions[i])
        {
            if(i<10)
                isNumber=true;
            else
                isAction=true;
        }  
    }
    if(isNumber)
    {

        if(actionCounter == 0)
        {
            console.log('0')
            firstNumber += btn;
            input.value = firstNumber;
        }
        if(actionCounter == 1)
        {
            console.log('1')
            input.value = '';
            secondNumber += btn;
            input.value = secondNumber;
        }
    }
    if(isAction && firstNumber.length>0)
    {
        if(secondNumber.length == 0){
            if(btn == '=' || btn == 'Enter' || btn == 'Backspace'){
            
                console.log("is a = , Enter , Backspace");
                actionCounter=1;
            }
            else
            {
                console.log("is a oprator");
                actionCounter=1;
                action=btn;
            }
        }
        else {
                console.log("is a oprator");
                input.value = mergeNumbers(action)
                secondNumber=''
                action=btn;
                actionCounter = 1;
        }
    }
}

function mergeNumbers(op){
    switch(op){
        case '+':
            firstNumber = Number(firstNumber) + Number(secondNumber);
            break;
        case '-':
            firstNumber = Number(firstNumber) - Number(secondNumber);
            break;
        case '*':
            firstNumber = Number(firstNumber) * Number(secondNumber);
            break;
        case '/':
            firstNumber = Number(firstNumber) / Number(secondNumber);
            break;
        case '%':
            firstNumber = Number(firstNumber) % Number(secondNumber);
            break;
        case '**':
            firstNumber = Number(firstNumber) ** Number(secondNumber);
            break;
        case 'C':
            firstNumber = '';
            secondNumber= '';
            input.value= '';
            break;
        case 'CE':
            secondNumber = '';
            input.value = '';
            break;
    }
    firstNumber = String(firstNumber);
    secondNumber = '';
    console.log("merge")
    return firstNumber;
}

let li1 = $.querySelector('.ce')
let li2 = $.querySelector('.power')
let li3 = $.querySelector('.rem')
let li4 = $.querySelector('.nine')
let li5 = $.querySelector('.eight')
let li6 = $.querySelector('.seven')
let li7 = $.querySelector('.six')
let li8 = $.querySelector('.five')
let li9 = $.querySelector('.four')
let li10 = $.querySelector('.three')
let li11 = $.querySelector('.two')
let li12 = $.querySelector('.one')
let li13 = $.querySelector('.equal')
let li14 = $.querySelector('.zero')
let li15 = $.querySelector('.dot')
let li16 = $.querySelector('.comp')
let li17 = $.querySelector('.minus')
let li18 = $.querySelector('.division')
let li19 = $.querySelector('.multi')
let li20 = $.querySelector('.plus')

let lis = [li1,li2,li3,li4,li5,li6,li8,li9,li10,li11,li12,li13,li14,li15,li16,li17,li18,li19,li20]

for(let i = 0 ; i<lis.length ; i++)
{
    lis[i].addEventListener('click', btnDetect)
}

function btnDetect(event){
    let liElem = event.target;
    incomeBtn = liElem.innerHTML;
    if(incomeBtn == '÷')
        incomeBtn = '/'
    if(incomeBtn == '×')
        incomeBtn = '*'
    if(incomeBtn == '∧')
        incomeBtn = '**'
    // if(incomeBtn == 'C')
    // {
    //     firstNumber = '';
    //     secondNumber= '';
    //     input.value = '';
    // }
    keyboardAction1();
}
function keyboardAction1(){
    let isAction=false , isNumber=false;

    // console.log(incomeBtn)

    for(let i=0 ; i<numbersAndActions.length ; i++)
    {
        if(incomeBtn == numbersAndActions[i])
        {
            if(i<10)
                isNumber=true;
            else
                isAction=true;
        }  
    }
    if(isNumber)
    {

        if(actionCounter == 0)
        {
            console.log('0')
            firstNumber += incomeBtn;
            input.value = firstNumber;
        }
        if(actionCounter == 1)
        {
            console.log('1')
            input.value = '';
            secondNumber += incomeBtn;
            input.value = secondNumber;
        }
    }
    if(isAction && firstNumber.length>0)
    {
        if(secondNumber.length == 0){
            if(incomeBtn == '=' || incomeBtn == 'Enter' || incomeBtn == 'Backspace'){
            
                console.log("is a = , Enter , Backspace");
                actionCounter=1;
            }
            else
            {
                console.log("is a oprator");
                actionCounter=1;
                action=incomeBtn;
                if(incomeBtn == 'C' || incomeBtn == 'CE'){
                    mergeNumbers(action);
                    actionCounter=0;
                    action = '';
                }
            }
        }
        else {
            if(incomeBtn == 'C' || incomeBtn == 'CE'){
                mergeNumbers(incomeBtn);
                actionCounter=1;
                console.log('flag 203')
            }
            else
                console.log("is a oprator");
                input.value = mergeNumbers(action)
                secondNumber=''
                action=incomeBtn;
                actionCounter = 1;
        }
    }
}