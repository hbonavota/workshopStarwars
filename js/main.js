function GetRequest(url, datos, ProcesarPersonas) {
    $.ajax({
        type: "GET",
        dataType: "json",
        data: datos,
        contentType: "application/json",
        async: true,
        url: url,
        success: ProcesarPersonas,
        error: function (a, b, c) {
            // alert("Error..")
        }
    });

}
