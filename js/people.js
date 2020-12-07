function obtenerTodos() {
    //va al main.js y ejecuta el GetRequest le paso de parametro el http
    GetRequest("https://swapi.co/api/people/", null, ProcesarPersonas);
}

function ProcesarPersonas(result) {
    var personas = [];
    //ver lo del parametro j
    result.results.forEach(function (item) {
        personas.push({
            nombre: item.name,
            genero: item.gender,
            altura: item.height,
            peso: item.mass,
            colorOjos: item.eye_color
        })
    })
    MostrarPersonas(personas, result.next);
    //return personas;
}

function ObtenerPorURL(verMas) {
    GetRequest(verMas, null, ProcesarPersonas);
}

function MostrarPersonas(personas, verMas) {
    var bodyRows = "";
    for (let i = 0; i < personas.length; i++) {
        
        var fila = "<tr>" +
            "<td>" + i + "</td>" +
            "<td>" + personas[i].nombre + "</td>" +
            "<td>" + personas[i].genero + "</td>" +
            "<td>" + personas[i].altura + "</td>" +
            "<td>" + personas[i].peso + "</td>" +
            "<td>" + personas[i].colorOjos + "</td>" +
            "<td id='nodo' >" + "<button type='button' id='save' class='btn btn-success'>" + "Guardar" + "</button>" + "<td> " +
            "<tr>";
        bodyRows += fila;
    }
    $("#tableBody").append(bodyRows);
    $("#save").on("click", function () {
        console.log(fila)
        debugger;
        $('#nodo').parent().remove();
    });
    $("#seeMore").on("click", function () {
        ObtenerPorURL(verMas, ProcesarPersonas);
    });
}

/*
guardo el value 
function localS(a,b) {
    b = JSON.stringify(guardar)
    localStorage.setItem(a,b );       
}
localS('studentsList', testList);

levanta el localstorage
function buscarKey(j) {
    var k = localStorage.getItem(j)
    JSON.parse(k);
    if (k === null || undefined) {
        return [];
    } else {
        console.log("El valor de la Key "+ j +" es " + k);    
    }
}
 buscarKey("studentsList");
*/