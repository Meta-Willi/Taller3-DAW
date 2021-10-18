var estrenos = {
    "Peliculas": [
        {"imagen" : "img/AyD.jpg",
         "nombre" : "Ángeles y Demonios",
         "duracion" : "2h 18m",
         "clasificacion" : "Everyone",
         "butacas" : "Butaca Full Recliner",
         "horario" : "Solo los lunes de 3:00 p.m a 8:00 p.m."},
        {"imagen" : "img/Spider_Man.png",
         "nombre" : "Spiderman: Far From Home",
         "duracion" : "2h 10m",
         "clasificacion" : "Everyone",
         "butacas" : "Butacas Diamond V05",
         "horario" : "Solo los lunes de 10:00 a.m a 2:00 p.m."},
        {"imagen" : "img/it.jpg",
         "nombre" : "It: Capítulo Dos",
         "duracion" : "2h 49m",
         "clasificacion" : "+18",
         "butacas" : "Butacas Diamond V05",
         "horario" : "Todos los Miercoles y Viernes de 8:00 p.m. a 11:00 p.m."},
        {"imagen" : "img/Hachi_poster.jpg",
         "nombre" : "Siempre a tu lado",
         "duracion" : "1h 33m",
         "clasificacion" : "Everyone",
         "butacas" : "Butacas Full Recliner",
         "horario" : "Todos los Domingos y MMartes de 9:00 p.m. a 11:00 p.m."},
    ]
};

//Obteniendo el elemento contenedor donde se cargarán
//todos los datos del objeto JSON
var div = document.getElementById("info");
div.innerHTML = volcarDatos(estrenos.Peliculas);

function volcarDatos(datos){
    var total = datos.length;
    data = "<ul class=\"grid\">\n";
    for(var i=0; i<total; i++){
        data += "<div class=\"imagen\">\n";
        data += "<img src=\"" + datos[i].imagen + "\" alt=\"Portada " + datos[i].nombre + " \" class=\"avatar\" />\n";   

        data += "</div>";
        data += "<li class=\"box\">\n";         
        data += "<div class=\"box-shadow\"></div>\n";
        data += "<div class=\"box-gradient\">\n";
        
        data += "<h4>\nNombre: " + datos[i].nombre + " \n</h4>\n";
        data += "<p>\nDuración: " + datos[i].duracion + "\n<br />\n";
        data += "Clasificación: " + datos[i].clasificacón + "\n<br />\n";
        data += "Butacas: " + datos[i].butacas + "\n<br />\n";
        data += "Horario: " + datos[i].horario + "\n</p>\n";
        data += "</div>\n";
        data += "</li>\n";
    }
    data += "</ul>\n";
    return data;
}

var myArrayObject = [];
var divState;

function init() {
    console.log("Carga de la página finalizada.");
    if(typeof(Storage) == "undefined") {
        alert("El navegador no tiene soporte para HTML5 y almacenamiento local. Se recomienda actualizarlo.");
    }
    else {
        console.log("El navegador soporta tanto localStorage como sessionStorage.");
        divState = document.getElementById("state");
    }
    divState = document.getElementById("state");
    if(typeof(localStorage) == "undefined"){
        divState.style.display = 'none';
    }
    else{
        divState.style.display = 'block';
    }
}

function buy() {
    var myName = document.getElementById("ticket");
    var age = document.getElementById("horarios");
    var msg;
    //Verificar si se puede utilizar localStorage en el navegador
    try {
        localStorage.setItem("ticket", myName.value);
        localStorage.setItem("horarios", age.value);
        myName.value = "";
        age.value = "";
        msg = "Datos guardados en el localStorage.";
        console.log(msg);
        //Mostrar al usuario mensaje de estado
        divState.innerHTML = "<p>" + msg + "</p>";
    }
    catch (e) {
        //Verificar si el límite de almacenamiento no se ha sobrepasado
        if (e >= QUOTA_EXCEEDED_ERR) {
            console.log("Error: Límite para almacenamiento local se ha alcanzado.");
        }
        else {
            console.log("Error: Guardando en el almacenamiento local.");
        }
    }
}

function bill() {
    var msg = "Obteniendo el dato " + localStorage.key(0) + " y " + localStorage.key(1) + " desde el localStorage.";
    var myName = document.getElementById("ticket");
    var age = document.getElementById("horarios");
    console.log(msg);
    divState.innerHTML = "<p>" + msg + "</p>";
    myName.value = localStorage.getItem("ticket");
    age.value = localStorage.getItem("horarios");
}
