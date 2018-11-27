
let dt = new Date();

let año_actual = 0;
let mes_actual = 0;
let dia_actual = 0;
let edad = 0;

setOldActual = () => {
    dia_actual = dt.getDate();
    mes_actual = (dt.getMonth())+1;
    año_actual = dt.getFullYear();

    if (mes_actual > 11) {
        edad = año_actual - 1996;
    }

    if (mes_actual < 11) {
        edad = año_actual - 1997;
    }

    if (mes_actual == 11) {
        if (dia_actual < 18) {
            edad = 2018 - 1997;
        }
        if ( dia_actual >= 18) {
            edad = 2018 - 1996;
        }
    }

    document.getElementById("Edad").innerText = `Edad: ${edad} Años`;
}

setOldActual();

getOldActual = () => {
    return edad; 
}


