
let res;let exp=-1;

const button = document.querySelectorAll('button');
button.forEach(element => {
    element.addEventListener('click',()=>calculate(element));
});


function calculate(element){
    let inp=element.getAttribute('id');
    let dis=document.querySelector('.dis');
    switch(inp){
        case 'clear':
            dis.innerText="";
            break;
        case 'back':
            dis.innerText = dis.innerText.substr(0, dis.innerText.length - 1);
            break;
        case 'per':
            dis.innerText=dis.innerText+'%';
            exp='%';
            break;
        case 'divi':
            dis.innerText=dis.innerText+'÷';
            exp='÷';
            break;
        case 'plu':
            dis.innerText=dis.innerText+'+';
            exp='+';
            break;
        case 'min':
            dis.innerText=dis.innerText+'-';
            exp='-';
            break;
        case 'mul':
            dis.innerText=dis.innerText+'x';
            exp='x'
            break;
        case 'poi':
            dis.innerText=dis.innerText+'.';
            break;
        case 'equ':
            equal();
            if(res%1){
                res=res.toFixed(3);}
            dis.innerText=res;
            break;
        case 'sev':
            dis.innerText=dis.innerText+'7';
            break;
        case 'eig':
            dis.innerText=dis.innerText+'8';
            break;
        case 'nin':
            dis.innerText=dis.innerText+'9';
            break;
        case 'six':
            dis.innerText=dis.innerText+'6';
            break;
        case 'fiv':
            dis.innerText=dis.innerText+'5';
            break;
        case 'fou':
            dis.innerText=dis.innerText+'4';
            break;
        case 'one':
            dis.innerText=dis.innerText+'1';
            break;
        case 'two':
            dis.innerText=dis.innerText+'2';
            break;
        case 'thr':
            dis.innerText=dis.innerText+'3';
            break;
        case 'zer':
            dis.innerText=dis.innerText+'0';
            break;

    }
}

function equal(){
    let str=document.querySelector('.dis').innerText;
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