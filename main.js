function cambioColor() {
    let color = generarColorAleatorio();

    document.getElementById('container').style.backgroundColor = color;
}

function generarColorAleatorio() {
    let rojo = Math.floor(Math.random()*256);
    let verde = Math.floor(Math.random()*256);
    let azul = Math.floor(Math.random()*256);

    return `rgb(${rojo}, ${verde}, ${azul})`;
}