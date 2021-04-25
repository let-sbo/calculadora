const pantallaOp=document.getElementById('pantalla-aperaciones');
const pantallaRes=document.getElementById('resultado');
const btnUno = document.getElementById('1');
const btnDos = document.getElementById('2');
const btnTres = document.getElementById('3');
const btnCuatro = document.getElementById('4');
const btnCinco = document.getElementById('5');
const btnSeis = document.getElementById('6');
const btnSiete = document.getElementById('7');
const btnOcho = document.getElementById('8');
const btnNueve = document.getElementById('9');
const btnCero = document.getElementById('0');
const btnMas = document.getElementById('mas');
const btnMenos = document.getElementById('menos');
const btnPor = document.getElementById('por');
const btnEntre = document.getElementById('entre');
const btnIgual = document.getElementById('igual')
const btnBorrar = document.getElementById('borrar')
let operandoa;
let operandob;
let operacion;
btnUno.addEventListener('click',function(){
    pantallaOp.textContent += btnUno.value;
});
btnDos.addEventListener('click',function(){
    pantallaOp.textContent += btnDos.value;
});
btnTres.addEventListener('click',function(){
    pantallaOp.textContent += btnTres.value;
});
btnCuatro.addEventListener('click',function(){
    pantallaOp.textContent += btnCuatro.value;
});
btnCinco.addEventListener('click',function(){
    pantallaOp.textContent += btnCinco.value;
});
btnSeis.addEventListener('click',function(){
    pantallaOp.textContent += btnSeis.value;
});
btnSiete.addEventListener('click',function(){
    pantallaOp.textContent += btnSiete.value;
});
btnOcho.addEventListener('click',function(){
    pantallaOp.textContent += btnOcho.value;
});
btnNueve.addEventListener('click',function(){
    pantallaOp.textContent += btnNueve.value;
});
btnCero.addEventListener('click',function(){
    pantallaOp.textContent += btnCero.value;
});
btnMenos.addEventListener('click',()=>{
    pantallaOp.textContent += btnMas.textContent;
    operandoa=parseFloat(pantallaOp.textContent);
    operacion='-';
    pantallaOp.textContent='';
    
})
btnMas.addEventListener('click',function(){
    pantallaOp.textContent += btnMas.textContent;
    operandoa=parseFloat(pantallaOp.textContent);
    operacion='+';
    pantallaOp.textContent='';
    
});
btnPor.addEventListener('click',function(){
    pantallaOp.textContent += btnPor.value;
    operandoa=parseFloat(pantallaOp.textContent);
    operacion='*';
    pantallaOp.textContent='';
    
});
btnEntre.addEventListener('click',function(){
    pantallaOp.textContent += btnEntre.value;
    operandoa=parseFloat(pantallaOp.textContent);
    operacion='/';
    pantallaOp.textContent='';
    
    
});
btnIgual.addEventListener('click',function(){
    if(isNaN(parseFloat(pantallaOp.textContent))){pantallaRes.textContent=0}
    else{pantallaRes.textContent=parseFloat(pantallaOp.textContent);
        operandob=parseFloat(pantallaOp.textContent);
        resolver()
    }

});
btnBorrar.addEventListener('click',function(e){
    pantallaOp.textContent = pantallaOp.textContent.slice(0,(pantallaOp.textContent.length)-1);
});

function resolver(){
    switch(operacion){
        case '+':
            pantallaRes.textContent= operandoa+operandob; 
            break;
        case '-':
            pantallaRes.textContent= operandoa-operandob; 
            break;
        case '*':
            pantallaRes.textContent= operandoa*operandob; 
            break;
        case '/':
            pantallaRes.textContent= operandoa/operandob; 
            break;
    }
    operandob=0;
    operandoa=0;
    operacion="";
}

// function suma(a,b,...c){
//     let resSuma=a+b;
//     c.forEach((n)=>{resSuma+=n});
//     return resSuma;
// }
// function resta(a,b,...c){
//     let resResta=a+b;
//     c.forEach((n)=>{resResta+=n});
//     return resResta;
// }
// function division(a,b,...c){
//     let resDiv=a+b;
//     c.forEach((n)=>{resDiv+=n});
//     return resDiv;
// }
// function multiplicacion(){
//     let resMul=a+b;
//     c.forEach((n)=>{resMul+=n});
//     return resMul;
// }


