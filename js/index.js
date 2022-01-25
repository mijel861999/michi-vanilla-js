
const vacio = ""
const x = "X"
const o = "O"

let casillas = [ vacio, vacio, vacio, vacio, vacio, vacio, vacio, vacio, vacio ];

const casilleros = document.getElementsByClassName('casillero')


Array.from(casilleros).forEach((casillero, i) => {
    casillero.addEventListener('click', () => {
        // console.log(casillero, i + 1) 
        casillero.innerHTML = x;
        casillas[i] = x;

        setTimeout(movimientoMaquina, 500)
    })
})

const movimientoMaquina = () => {
    console.log('Maquina')
}