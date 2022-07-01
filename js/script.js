//?corecciones a realizar

    /* 
    !1) La estructura arrayEleccion podria ser simplemente un array y generar la elección aleatoria del CPU en base a la posición redondeada (0, 1 o 2).

    !2) Para seguir buenas practicas y ordenar el codigo, podrias generar las variables del proceso directamente dentro del bucle (cpu y eleccion). 
    !De esta manera podrias colocar argumentos en las funciones fnRivalCpu y fnUsuario para utilizarlas en orden a la selección del usuario en cada ronda.

    !3) Respecto a los condicionales if/else dentro de las funciones: 

        !a) dentro de la funcion fnRivalCpu deberias tomar como argumento el numero aleatorio generado y simplemente devolver el resultado en orden al array base "arrayEleccion"

        !b)dentro de las funciones fnUsuario y fnVersus, seria mas apropiado utilizar un condicional switch en lugar de if/else

    *4) Deberias realizar un uso apropiado de objetos y arrays. Una idea para implementarlo seria construyendo una tabla de posiciones (tomar nombre del usuario, controlar cuantas rondas gana por bucle. En base a esto crear un constructor que genere el ranking del usuario en un objeto y colocarlo en un array "posiciones". En caso de que el usuario lo solicite, podria consultar la tabla y el proceso devolver este array ordenado por mayores rondas).
    */

    // Piedra papel o tijera

//? DOM
const btnPiedra = document.getElementById("piedra");
const btnPapel = document.getElementById("papel");
const btnTijera = document.getElementById("tijera");
const btnLagarto = document.getElementById("lagarto");
const btnSpock = document.getElementById("spock");
const texto = document.getElementById("texto");
const titulo = document.querySelector("h1");
const parrafoNombre = document.createElement("p");
const input = document.querySelector('.input');
const agregar = document.querySelector('.boton_agregar');
const contenedor = document.querySelector ('.container');
const fondoResultado = document.querySelector(".resultadoFinal")
const contenedorJuego = document.querySelector(".contenedor")
let datosJuego = contenedorJuego.innerHTML
let h1 = document.querySelector("h1")

// const fondoResultado = document.querySelector ('.contenedor')
let btnReset = document.createElement("button")

let numero;
let contadorGanadas;
let contadorPerdidas;

class Nombre {
    constructor (nombreUsuario) {
        this.crearDiv (nombreUsuario)
    }

    crearDiv(nombreUsuario) {
        
        // creando el input de bienvenida al usuario
        let inputItem = document.createElement ('input')
        inputItem.setAttribute('type', 'text')
        inputItem.disabled = true
        inputItem.classList.add ('item-input')
        inputItem.value = `Bienvenido ${nombreUsuario}`

        // creando el nuevo div donde va a aparecer el nombre
        let nuevoDiv = document.createElement ('div')
        nuevoDiv.classList.add ('item')

        // AGREGAR ELEMENTOS (nuevodiv,inputItem)
        contenedor.appendChild (nuevoDiv)
        nuevoDiv.appendChild (inputItem)
}
}

let fnChequearInput = () => {
    
    if (input.value != "") {
        
        new Nombre(input.value);
        localStorage.setItem("Nombre", input.value)
        input.hidden = true
        agregar.hidden = true
    }
}

agregar.addEventListener("click", fnChequearInput);
input.addEventListener("keydown", function(e){
    if(e.keyCode === 13){
        fnChequearInput()
    }
})

let arrayEleccion = ["piedra","papel","tijera","lagarto","spock"] //! SE BORRO el array de objeto --> ahora solo es una array y se agrego lagarto y spock
//deestructuracion de arrays
const [pi, pa, ti, la, sp] = arrayEleccion

//?constantes de elecciones
const piedra = pi
const papel = pa
const tijera = ti
const lagarto = la
const spock = sp

//funciones

//!se agrego argumento a la fn
//? se agrego imagen elegiada por la cpu
let fnRivalCpu = (valorCpu) => {
    let imagenMaquina = document.getElementById("imgMaquina")
    cpu = valorCpu

    if (cpu === 0) {
        imagenMaquina.src = "img/piedra.png"
        return cpu = piedra //! ahora cpu llama al valor del indice del arrayEleccion
    } 
    else if (cpu === 1) {
        imagenMaquina.src = "img/papel.png"
        return cpu = papel //! ahora cpu llama al valor del indice del arrayEleccion
    } 
    else if (cpu === 2){
        imagenMaquina.src = "img/tijera.png"
        return cpu = tijera //! ahora cpu llama al valor del indice del arrayEleccion
    }
    else if (cpu === 3){
        imagenMaquina.src = "img/lagarto.png"
        return cpu = lagarto //! ahora cpu llama al valor del indice del arrayEleccion
    }
    else if (cpu === 4){
        imagenMaquina.src = "img/spock.png"
        return cpu = spock //! ahora cpu llama al valor del indice del arrayEleccion
    }

}

//!se agrego arg a la fn
let fnUsuario = (valorUsuario) => {
    
    // valorUsuario = prompt("Piedra, Papel o Tijera").toLowerCase()
    eleccion = valorUsuario

        //! se cambio el if por un SWITCH
        
            switch(eleccion){
                case "piedra":
                    return eleccion = piedra
                    
                case "papel":
                    return eleccion = papel
                
                case "tijera":
                    return eleccion = tijera
                
                case "lagarto":
                    return eleccion = lagarto
                
                case "spock":
                    return eleccion = spock
            }
        
    }

//?puntaje
let ganar = () => {
    let ganador = document.getElementById("marcadorUsuario")
    numero = Number(ganador.innerHTML) + 1
    ganador.innerHTML = numero
    return
    }
    
let perder = () => {
    let perder = document.getElementById("marcadorMaquina")
    numero = Number(perder.innerHTML) + 1
    perder.innerHTML = numero
    return
    }

//!se cambie el if por un condicional SWICHT y se manipulo el DOM
let fnVersus = () => {
    
    if(cpu===eleccion){
        texto.innerHTML = `¡EMPATASTE! ambos eligieron ${eleccion}`
        texto.style.backgroundColor = "orange"
        texto.style.color = "white"
    } 

    else if ((cpu === "piedra" && eleccion === "papel") || (cpu === "piedra" && eleccion === "spock") || (cpu === "papel" && eleccion === "tijera") || (cpu === "papel" && eleccion === "lagarto") || (cpu === "tijera" && eleccion === "piedra") || (cpu === "tijera" && eleccion === "spock") || (cpu === "lagarto" && eleccion === "piedra") || (cpu === "lagarto" && eleccion === "tijera") || (cpu === "spock" && eleccion === "papel") || (cpu === "spock" && eleccion === "lagarto")) {
        
        texto.innerHTML = `¡GANASTE!, la cpu eligio ${cpu}`
        texto.style.backgroundColor = "green"
        texto.style.color = "white"
        ganar()
       
    } 
    else if ((eleccion === "piedra" && cpu === "papel") || (eleccion === "piedra" && cpu === "spock") || (eleccion === "papel" && cpu === "tijera") || (eleccion === "papel" && cpu === "lagarto") || (eleccion === "tijera" && cpu === "piedra") || (eleccion === "tijera" && cpu === "spock") || (eleccion === "lagarto" && cpu === "piedra") || (eleccion === "lagarto" && cpu === "tijera") || (eleccion === "spock" && cpu === "papel") || (eleccion === "spock" && cpu === "lagarto")) {
        
        texto.innerHTML = `¡PERDISTE!, la cpu eligio ${cpu}`
        texto.style.backgroundColor = "red"
        texto.style.color = "white"
        perder()
        
    }
}

//?muestra la imagen elegida por el usuario
let fnMostrarUsuario = (opcion) => {
    let imagenUsuario = document.getElementById("imgUsuario")
    imagenUsuario.src = `img/${opcion}.png`
}

//? se agrego cantidad de veces que se juega contra la maquina
let resultadoFinal = () => {
    contadorGanadas = document.getElementById("marcadorUsuario")
    let ganaste = Number(contadorGanadas.innerHTML)
    
    contadorPerdidas = document.getElementById("marcadorMaquina")
    let perdiste = Number(contadorPerdidas.innerHTML)
    
    let win = {ganaste: `${ganaste} a ${perdiste}`}
    let lose = {perdiste: `${perdiste} a ${ganaste}`}

    if(ganaste === 5){
        localStorage.setItem("Gano", JSON.stringify(win.ganaste))
        let gWin = localStorage.getItem("Gano")
        fondoResultado.innerHTML = `FELICITACIONES, Ganaste ${gWin}`
        fondoResultado.classList.add("fondoGanador")
        contenedorJuego.style.display ="none"
        btnReset.innerHTML = "Volver a jugar"
        btnReset.classList.add("btnReset")
        fondoResultado.appendChild(btnReset)
        btnReset.hidden = false

        contadorGanadas.innerHTML = 0
        contadorPerdidas.innerHTML = 0
    }

     if(perdiste === 5){
        localStorage.setItem("Perdio", JSON.stringify(lose.perdiste))
        let lLose = localStorage.getItem("Perdio")

        fondoResultado.innerHTML = `SIGUE INTENTANDO, Perdiste ${lLose}`
        fondoResultado.classList.add("fondoPerdedor")
        contenedorJuego.style.display = "none"
        btnReset.innerHTML = "Volver a jugar"
        btnReset.classList.add("btnReset")
        fondoResultado.appendChild(btnReset)
        btnReset.hidden = false  
        
        contadorGanadas.innerHTML = 0
        contadorPerdidas.innerHTML = 0
    }

}

let playGame = (opcionUsuario) => {
    if(input.value!==""){
        h1.innerHTML = "Piedra, Papel, Tijera, Lagarto, Spock"
        h1.style.color = "black"
        let largoArray = arrayEleccion.length //!se movio de lugar la variable
        let cpu = Math.round(Math.random()*(largoArray-1)) //!se movio de lugar la variable
        let eleccion = opcionUsuario //!//!se movio de lugar la variable
        
        fnRivalCpu(cpu) //!se coloco argumentos a la fn
        fnUsuario(eleccion) //!se coloco argumentos a la fn
        fnMostrarUsuario(eleccion) //!se agrego mostrar imagen usuario
    
        fnVersus()
        resultadoFinal()
    } else {
        h1.innerHTML = "¡¡¡Te olvidaste de ingresar el nombre!!! ⬇️"
        h1.style.color = "red"
    }
}


//? EVENTOS click sobre cada opcion elegida
btnPiedra.addEventListener("click", () => {
    playGame(piedra)
})

btnPapel.addEventListener("click", () => {
    playGame(papel)
})

btnTijera.addEventListener("click", () => {
    playGame(tijera)
})

btnLagarto.addEventListener("click", () => {
    playGame(lagarto)
})

btnSpock.addEventListener("click", () => {
    playGame(spock)
})

btnReset.addEventListener("click", () => {
        fondoResultado.innerHTML=""
        fondoResultado.classList.remove("fondoGanador")
        fondoResultado.classList.remove("fondoPerdedor")
        contenedorJuego.style.display = "flex"
        btnReset.hidden = true
        
        texto.innerHTML = "Elija una opcion"
        texto.style.backgroundColor = "#ffb74d"
        texto.style.color = "black"
})

