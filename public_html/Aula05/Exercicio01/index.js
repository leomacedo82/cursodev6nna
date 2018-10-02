var Resultado = document.getElementById("resultado");
function soma()
{
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);
    Resultado.innerHTML = "Resultado: " + (valor1 + valor2);
}

function subtrai()
{
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);
    Resultado.innerHTML = "Resultado: " + (valor1 - valor2);
}

function multiplica()
{
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);
    Resultado.innerHTML = "Resultado: " + (valor1 * valor2);
}

function divide()
{
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);
    Resultado.innerHTML = "Resultado: " + (valor1 / valor2);
}
