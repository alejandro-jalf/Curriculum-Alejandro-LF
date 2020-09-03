var app = new Vue({
    el: "#app",
    data: {
        menuVisible: false,
        leftVisible: false,
        screenActual: "DtPersonales",
        habilidades: [
            {name: "PhotoShop", porcentaje: 20, id: "barra-int0"},
            {name: "Programacion Java", porcentaje: 80, id: "barra-int1"},
            {name: "Base de datos MySql", porcentaje: 90, id: "barra-int2"},
            {name: "Microsoft Word", porcentaje: 90, id: "barra-int3"},
            {name: "Trabajo en equipo", porcentaje: 95, id: "barra-int4"},
            {name: "HTML & CSS", porcentaje: 90, id: "barra-int5"},
            {name: "Bootstrap", porcentaje: 20, id: "barra-int6"},
            {name: "JavaScript", porcentaje: 95, id: "barra-int8"},
            {name: "JQuery", porcentaje: 50, id: "barra-int9"}
        ],
        contactoB1: [
            {href: "https://web.whatsapp.com/", image: "./image/whaticon.png", tooltip: "Copiar numero telefonico", enunciado: "922-155-2556", callBack: "9221552556"},
            {href: "https://www.facebook.com/alex.lopes.3538", image: "./image/fbIcon.ico", tooltip: "Ver perfil y Copiar nombre", enunciado: "Alex lopes", callBack: "Alex lopes"},
            {href: "https://twitter.com/Alejand45768571", image: "./image/twiter.png", tooltip: "Ver perfil", enunciado: "Alejandro Lopez Flores", callBack: ""}
        ],
        contactoB2: [
            {href: "https://login.live.com/", image: "./image/hotmail.png", tooltip: "Ir a Outlook.com y Copiar contacto", enunciado: "aleflo_1996@outlook.com", callBack: "aleflo_1996@outlook.com"},
            {href: "https://gmail.com", image: "./image/gmail.png", tooltip: "Ir a Gmail.com y Copiar contacto", enunciado: "alexlofa45@gmail.com", callBack: "alexlofa45@gmail.com"},
            {href: "https://github.com/alejandro-jalf", image: "./image/giticon.png", tooltip: "Ir a la pagina de Github", enunciado: "alejandro-jalf", callBack: ""}
        ]
    },
    mounted: function(){
        this.setLeft();
        this.menuVisible = this.isMovilScreen();
    },
    methods: {
        setLeft: function() {
            if (this.isMovilScreen()) {
                this.leftVisible = true;
            }
        },
        isMovilScreen: function() {
            const tamaño = window.innerHeight || document.documentElement.clientWidth || document.body.clientWidth;
            const isMovil = (tamaño >= 540);
            return isMovil
        },
        setMenu: function() {
            this.leftVisible = !this.leftVisible;
        },
        setScreen: function(screen) {
            this.screenActual = screen;
            if (this.isMovilScreen() === false) {
                this.setMenu();
            }
        },
        none: function(){
            return;
        },
        copyToClipboardGeneral: function(str){
            if (next === "") return;
            const newElement = document.createElement('textarea');
            newElement.value = str;
            document.body.appendChild(newElement);
            newElement.select();
            document.execCommand('copy');
            document.body.removeChild(newElement);
            alert(`Se a copiado "${str}" al portapapeles`);
        }
    }
});