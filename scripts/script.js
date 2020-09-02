
let cont = 0;

function getSizeHeight(){
    document.getElementById("DtPersonales").style.height = (screen.height-159)+"px";
    document.getElementById("HistorialACD").style.height = (screen.height-159)+"px";
    document.getElementById("Habilidades").style.height = (screen.height-159)+"px";
    document.getElementById("ExpPro").style.height = (screen.height-159)+"px";
    document.getElementById("Recon").style.height = (screen.height-159)+"px";
    document.getElementById("Contac").style.height = (screen.height-159)+"px";
}

setNone = () => {
    document.getElementById("btnDTP").style.color = "#fff";
    document.getElementById("btnHA").style.color = "#fff";
    document.getElementById("btnH").style.color = "#fff";
    document.getElementById("btnEP").style.color = "#fff";
    document.getElementById("btnPR").style.color = "#fff";
    document.getElementById("btnC").style.color = "#fff";
}

hide_showPantallas = (id) => {
    document.getElementById("DtPersonales").style.display = "none";
    document.getElementById("HistorialACD").style.display = "none";
    document.getElementById("Habilidades").style.display = "none";
    document.getElementById("ExpPro").style.display = "none";
    document.getElementById("Recon").style.display = "none";
    document.getElementById("Contac").style.display = "none";

    document.getElementById(id).style.display = "";

}

let idRe = "";
setPantalla = (id) => {
    setNone();
    document.getElementById(id).style.color = "#fbff00";
    idRe = id;
    
    switch(id){
        case "btnDTP":
            hide_showPantallas("DtPersonales");
        break;
        case "btnHA":
            hide_showPantallas("HistorialACD");
        break;
        case "btnH":
            hide_showPantallas("Habilidades");
        break;
        case "btnEP":
            hide_showPantallas("ExpPro");
        break;
        case "btnPR":
            hide_showPantallas("Recon");
        break;
        case "btnC":
            hide_showPantallas("Contac");
        break;
    }

    if (window.innerHeight <= 540 || window.innerWidth <= 830){
        document.getElementById("Izquierda").style.visibility = "hidden";
        cont = 0;
    }
}

getSizeHeight();
setPantalla("btnDTP");
hide_showPantallas("DtPersonales");

const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert(`Nombre "alex lopes" copiado al portapapeles`)
};

const copyToClipboardGeneral = str => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert(`Se a copiado "${str}" al portapapeles`)
};

const setHover = (value,id) => {
    if (value==0){
        document.getElementById(id).style.color = "#fff";
    } else {
        document.getElementById(id).style.color = "#f64600";
        document.getElementById(idRe).style.color = "#fbff00";
    }
}

setMenu = () => {
    console.log("contador");
    if (cont == 1){
        document.getElementById("Izquierda").style.visibility = "visible";
        cont = 0;
    } else {
        document.getElementById("Izquierda").style.visibility = "hidden";
        cont = 1;
    }
}

document.getElementById("Izquierda2").addEventListener("click", setMenu());

window.onresize = (event) => {
    const tamaño =
    window.innerHeight 
    || document.documentElement.clientWidth
    || document.body.clientWidth;

    if (tamaño >= 540) {
        document.getElementById("Izquierda").style.visibility = "visible";
        document.getElementById("Izquierda").style.position = "fixed";
    }
}


