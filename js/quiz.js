var boton = document.getElementById("corregir");

boton.addEventListener("click", function() {

    var puntaje = 0;

    var respuesta1 = document.querySelector(
        'input[name="p1"]:checked'
    );

    var respuesta2 = document.querySelector(
        'input[name="p2"]:checked'
    );

    var respuesta3 = document.querySelector(
        'input[name="p3"]:checked'
    );

    if (respuesta1 != null && respuesta1.value == "b") {
        puntaje = puntaje + 1;
    }

    if (respuesta2 != null && respuesta2.value == "a") {
        puntaje = puntaje + 1;
    }

    if (respuesta3 != null && respuesta3.value == "c") {
        puntaje = puntaje + 1;
    }

    var resultado = document.getElementById("resultado");

   var respuesta4 = document.querySelector(
        'input[name="p4"]:checked'
    );

    var respuesta5 = document.querySelector(
        'input[name="p5"]:checked'
    );

    if (respuesta1 != null && respuesta1.value == "b") {
        puntaje = puntaje + 1;
    }

    if (respuesta2 != null && respuesta2.value == "a") {
        puntaje = puntaje + 1;
    }

    if (respuesta3 != null && respuesta3.value == "c") {
        puntaje = puntaje + 1;
    }

    if (respuesta4 != null && respuesta4.value == "b") {
        puntaje = puntaje + 1;
    }

    if (respuesta5 != null && respuesta5.value == "a") {
        puntaje = puntaje + 1;
    }

    var resultado = document.getElementById("resultado");

    resultado.textContent = "Obtuviste " + puntaje +
        " de 5 respuestas correctas.";

    if (puntaje == 5) {
        resultado.textContent = resultado.textContent +
            " ¡Excelente!";
    } else {
        resultado.textContent = resultado.textContent +
            " ¡Seguí practicando!";
    }

});
