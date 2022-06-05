let arrayPersonas = [];
let arrayMontos = [];

const montoTotal = document.getElementById('total');
const porPersona = document.getElementById('cadaUno');

const agregados = document.getElementById('montos');

function guardarInfo(persona, monto){
    arrayPersonas.push(persona);
    arrayMontos.push(monto);
}

function obtenerInfo(){
    let info = null;
    const persona = document.getElementById('nombre').value;
    const monto = parseInt(document.getElementById('monto').value);
    if(validacion(persona, monto)){
        info = false;
    } else{
        guardarInfo(persona, monto);
        info = [persona, monto];
    }
    return info;
}

function validacion(persona, monto){
    let alert = false;
    if(persona == ""){
        alert = true;
    }
    if(monto == ""){
        alert = true;
    }
    return alert
}

function sumarTotal(){
    let montoInicial = 0;
    for(monto of arrayMontos){
        montoInicial += monto;
    }
    return montoInicial;
}

function dividirPago(){
    let cantPersona = arrayPersonas.length;
    let total = sumarTotal();
    let pagoPorPersona = total / parseInt(cantPersona);
    return pagoPorPersona.toFixed(2);
}

function limpiarInputs(){
    persona = document.getElementById('nombre').value = "";
    monto = document.getElementById('monto').value = "";
}


function reiniciar(){
    agregados.innerHTML = "";
    total.innerHTML = "";
    cadaUno.innerHTML = "";
    arrayPersonas = [];
    arrayMontos = [];
}


function crearBotonDelete(){
    const boton = document.createElement('input');
    boton.setAttribute('type', 'button');
    boton.setAttribute('value', 'X');
    boton.setAttribute('class', 'delete');
    boton.setAttribute('onclick', 'sacarObjeto(persona)');
    return boton;
}

function sacarObjeto(elementClass){
    agregados.innerHTML = "";
}

function mostrarInfo(){
    let boton = crearBotonDelete();
    const p = document.createElement('span');
    p.setAttribute('class', 'persona')
    const br = document.createElement('br');
    const value = obtenerInfo();
    if((typeof value) == 'object'){
        p.innerHTML = value;
        agregados.append(p);
        agregados.append(boton);
        agregados.append(br);
        montoTotal.innerHTML = sumarTotal();
        porPersona.innerHTML = dividirPago();
        limpiarInputs();
    }else if(value == false){
        alert('Llene los campos')
    }
    
}

