
let res;let exp=-1;

const button = document.querySelectorAll('button');
button.forEach(element => {
    element.addEventListener('click',()=>calculate(element));
});


function calculate(element){
    let inp=element.getAttribute('id');
    let dis=document.querySelector('.dis');
    let p2=document.querySelector('.p2');
    switch(inp){
        case 'clear':
            dis.innerText="";
            p2.innerText="";
            res="";
            break;
        case 'back':
            dis.innerText = dis.innerText.substr(0, dis.innerText.length - 1);
            break;
        case 'per':
            check();
            p2.innerText=res +' %';
            dis.innerText="";
            exp='%';
            break;
        case 'divi':
            check();
            p2.innerText=res+' ÷';
            exp='÷';
            dis.innerText="";
            break;
        case 'plu':
            check();
            p2.innerText=res+ ' +';
            exp='+';
            dis.innerText="";
            break;
        case 'min':
            check();
            p2.innerText=res+ ' -';
            exp='-';
            dis.innerText="";
            break;
        case 'mul':
            check();
            p2.innerText=res+' x';
            exp='x';
            dis.innerText="";
            break;
        case 'poi':
            dis.innerText=dis.innerText+'.';
            document.getElementById("poi").disabled=true;
            break;
        case 'equ':
            if(exp==-1&&p2.innerText&&!dis.innerText&&p2.innerText!="Invalid"){dis.innerText=p2.innerText;p2.innerText="";}else if(exp==-1&&dis.innerText&&!p2.innerText) break;
            else{equal();
            if(isNaN(res)||res=="Infinity"){res="Invalid";}
            else 
            p2.innerText=res;
            dis.innerText="";}
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
    if(exp==-1) return ;
    let str=document.querySelector('.p2').innerText+document.querySelector('.dis').innerText;
    str=str.split(exp);
    switch(exp){
        case '+':
            res=parseFloat(str[0])+parseFloat(str[1]);
            break;
        case '-':
            res=parseFloat(str[0])-parseFloat(str[1]);
            break;
        case 'x':
            res=parseFloat(str[0])*parseFloat(str[1]);
            break;
        case '÷':
            res=parseFloat(str[0])/parseFloat(str[1]);
            break;
        case '%':
            res=parseFloat(str[0])%parseFloat(str[1]);
            break;
    }
    exp=-1;
}

function check(){
    if(exp!=-1){
        let m=document.querySelector(".p2").innerText;
        let n=document.querySelector(".dis").innerText;
        if(!n) return;
        document.querySelector(".p2").innerText=m+n;
        document.querySelector(".dis").innerText="";
        equal();
        if(res%1){
            res=res.toFixed(2);}
    }
    else {
        res=document.querySelector('.dis').innerText;
    }
}