const contador = document.getElementById("contar");
const sumar = document.getElementById("incr");
const restar = document.getElementById("decr");
const reset = document.getElementById("reset");

let numero = 0;

sumar.addEventListener("click", ()=>{
    numero++;
    contador.innerHTML = numero;
});

restar.addEventListener("click", ()=>{

    if(numero==0){}
    else{
        numero--;
        contador.innerHTML = numero;
    }

});

reset.addEventListener("click", ()=>{
    numero = 0;
    contador.innerHTML = numero;
});

const contador2 = document.getElementById("contar2");
const sumar2 = document.getElementById("incr2");
const restar2 = document.getElementById("decr2");
const reset2 = document.getElementById("reset2");

let numero2 = 0;

sumar2.addEventListener("click", ()=>{
    numero2++;
    contador2.innerHTML = numero2;
});

restar2.addEventListener("click", ()=>{

    if(numero2==0){}
    else{
        numero2--;
        contador2.innerHTML = numero2;
    }

});

reset2.addEventListener("click", ()=>{
    numero2 = 0;
    contador2.innerHTML = numero2;
});

const botao = document.getElementById("btnClique")

// botao.addEventListener("click", fnSoma)

// function fnSoma(){
//     return

// }


