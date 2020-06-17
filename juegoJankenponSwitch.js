// Juego de piedra, pepel o tijera con switch

var maquina = Math.floor((Math.random()*3)+1);
var usuario = parseInt(prompt(`Bienvenido al juego del piedra, papel o tijeras \n Selecciona entre las siguientes 3 opciones: \n Piedra: 1 \n Papel: 2 \n Tijeras: 3`));

function juego(usuario){
    switch(usuario){
        case 1:
            if(maquina === 1){
                console.log(`Tu seleccionaste piedra mientras que la maquina selecciono piedra ~ Ha habido un empate`)
            } else if (maquina === 2){
                console.log(`Tu seleccionaste piedra mientras que la maquina selecciono papel ~ Ha ganado la maquina`)
            } else {
                console.log(`Tu seleccionaste piedra mientras que la maquina selecciono tijeras ~ Has ganado contra la maquina`)
            }
            break;
        case 2:
            if(maquina === 1){
                console.log(`Tu seleccionaste papel mientras que la maquina selecciono piedra ~ Has ganado contra la maquina`)
            } else if (maquina === 2){
                console.log(`Tu seleccionaste papel mientras que la maquina selecciono papel ~ Ha habido un empate`)
            } else {
                console.log(`Tu seleccionaste papel mientras que la maquina selecciono tijeras ~ Ha ganado la maquina`)
            }
            break;
        case 3:
            if(maquina === 1){
                console.log(`Tu seleccionaste tijeras mientras que la maquina selecciono piedra ~ Ha ganado la maquina`)
            } else if (maquina === 2){
                console.log(`Tu seleccionaste tijeras mientras que la maquina selecciono papel ~ Has ganado contra la maquina`)
            } else {
                console.log(`Tu seleccionaste tijeras mientras que la maquina selecciono tijeras ~ Ha habido un empate`)
            }
            break;
    }
}

juego(usuario);