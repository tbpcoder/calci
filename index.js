
let res;let exp=-1;

const button = document.querySelectorAll('button');
button.forEach(element => {
    element.addEventListener('click',()=>calculate(element));
});


function calculate(element){
    let inp=element.getAttribute('id');
    let display=document.querySelector('.display');
    switch(inp){
        case 'clear':
            display.innerText="";
            break;
        case 'back':
            display.innerText = display.innerText.substr(0, display.innerText.length - 1);
            break;
        case 'per':
            display.innerText=display.innerText+'%';
            exp='%';
            break;
        case 'divi':
            display.innerText=display.innerText+'÷';
            exp='÷';
            break;
        case 'plu':
            display.innerText=display.innerText+'+';
            exp='+';
            break;
        case 'min':
            display.innerText=display.innerText+'-';
            exp='-';
            break;
        case 'mul':
            display.innerText=display.innerText+'x';
            exp='x'
            break;
        case 'poi':
            display.innerText=display.innerText+'.';
            break;
        case 'equ':
            equal();
            if(res%1){
                res=res.toFixed(3);}
            display.innerText=res;
            break;
        case 'sev':
            display.innerText=display.innerText+'7';
            break;
        case 'eig':
            display.innerText=display.innerText+'8';
            break;
        case 'nin':
            display.innerText=display.innerText+'9';
            break;
        case 'six':
            display.innerText=display.innerText+'6';
            break;
        case 'fiv':
            display.innerText=display.innerText+'5';
            break;
        case 'fou':
            display.innerText=display.innerText+'4';
            break;
        case 'one':
            display.innerText=display.innerText+'1';
            break;
        case 'two':
            display.innerText=display.innerText+'2';
            break;
        case 'thr':
            display.innerText=display.innerText+'3';
            break;
        case 'zer':
            display.innerText=display.innerText+'0';
            break;

    }
}

function equal(){
    let str=document.querySelector('.display').innerText;
    str=str.split(exp);
    switch(exp){
        case '+':
            res=parseInt(str[0])+parseInt(str[1]);
            break;
        case '-':
            res=parseInt(str[0])-parseInt(str[1]);
            break;
        case 'x':
            res=parseInt(str[0])*parseInt(str[1]);
            break;
        case '÷':
            res=parseInt(str[0])/parseInt(str[1]);
            break;
        case '%':
            res=parseInt(str[0])%parseInt(str[1]);
            break;
    }
    exp=-1;
}