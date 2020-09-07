var app = new Vue({
    el: "#app",
    data: {
        leftVisible: false,
        backgroundVisible: false,
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
            {href: "tel:+529221552556", image: "./image/whaticon.png", tooltip: "Copiar numero telefonico", enunciado: "922-155-2556", callBack: "9221552556"},
            {href: "https://www.facebook.com/alex.lopes.3538", image: "./image/fbIcon.png", tooltip: "Ver perfil y Copiar nombre", enunciado: "Alex lopes", callBack: "Alex lopes"},
            {href: "https://twitter.com/Alejand45768571", image: "./image/twiter.png", tooltip: "Ver perfil", enunciado: "Alejandro Lopez Flores", callBack: ""}
        ],
        contactoB2: [
            {href: "https://login.live.com/", image: "./image/hotmail.png", tooltip: "Ir a Outlook.com y Copiar contacto", enunciado: "aleflo_1996@outlook.com", callBack: "aleflo_1996@outlook.com"},
            {href: "https://gmail.com", image: "./image/gmail.png", tooltip: "Ir a Gmail.com y Copiar contacto", enunciado: "alexlofa45@gmail.com", callBack: "alexlofa45@gmail.com"},
            {href: "https://github.com/alejandro-jalf?tab=repositories", image: "./image/giticon.png", tooltip: "Ir a la pagina de Github", enunciado: "alejandro-jalf", callBack: ""}
        ],
        reconocimientos: [
            {iconClass: "icon-number", description: "Reconocimiento de participacion en el Encuentro Nacional de Innovacion Tecnologica 2018, en Tehuacan Puebla"},
            {iconClass: "icon-number1", description: "Reconocimiento de participacion en el Encuentro Nacional de Innovacion Tecnologica 2019, en Veracruz Veracruz"},
            {iconClass: "icon-number2", description: "Segundo Lugar en el concurso Estatal de programación, cede en San AndrésTuxtla Veracruz"}
        ]
    },
    mounted: function(){
        this.setLeft();
    },
    methods: {
        setLeft: function() {
            if (this.isMovilScreen() === 1) {
                if (this.leftVisible) {
                    this.backgroundVisible = true;
                }
            } else {
                this.leftVisible = true;
                this.backgroundVisible = false;
            }
        },
        isMovilScreen: function() {
            const lengthS = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            const isMovil = (lengthS > 830) ? 0 : 1;
            return isMovil
        },
        setMenu: function() {
            this.leftVisible = !this.leftVisible;
            this.backgroundVisible = !this.backgroundVisible;
        },
        setScreen: function(screen) {
            this.screenActual = screen;
            if (this.isMovilScreen() === 1) {
                this.setMenu();
            }
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
        },
        getOldActual: function() {
            const fecha = new Date();
            
            const year_actual = fecha.getFullYear();
            const mes_actual = (fecha.getMonth())+1;
            const dia_actual = fecha.getDate();
            let edad = 0;

            if (mes_actual > 11) {
                edad = year_actual - 1996;
                return edad;
            }

            if (mes_actual < 11) {
                edad = year_actual - 1997;
                return edad;
            }

            if (mes_actual == 11) {
                if (dia_actual < 18) {
                    edad = year_actual - 1997;
                    return edad;
                }
                if ( dia_actual >= 18) {
                    edad = year_actual - 1996;
                    return edad;
                }
            }
        }
    }
});