var areaTriangulo = document.getElementById("area-triangulo");
var areaQuadrado = document.getElementById("area-quadrado");
var areaCirculo = document.getElementById("area-circulo");
var areaTrapezio = document.getElementById("area-trapezio");
var areaRetangulo = document.getElementById("area-retangulo");

function calculaAreaTriangulo()
{
    var base = parseFloat(document.getElementById("base-triangulo").value);
    var altura = parseFloat(document.getElementById("altura-triangulo").value);
    areaTriangulo.value = (base * altura) / 2;
}

function calculaAreaQuadrado()
{
    var lado = parseFloat(document.getElementById("lado-quadrado").value);
    areaQuadrado.value = lado * lado;
}

function calculaAreaCirculo()
{
    var raio = parseFloat(document.getElementById("raio-circulo").value);
    areaCirculo.value = 3.14 * raio * raio;
}

function calculaAreaTrapezio()
{
    var baseMenor = parseFloat(document.getElementById("base-menor-trapezio").value);
    var baseMaior = parseFloat(document.getElementById("base-maior-trapezio").value);
    var altura = parseFloat(document.getElementById("altura-trapezio").value);
    areaTrapezio.value = ((baseMaior + baseMenor) / 2) * altura;
}

function calculaAreaRetangulo()
{
    var base = parseFloat(document.getElementById("base-retangulo").value);
    var altura = parseFloat(document.getElementById("altura-retangulo").value);
    areaRetangulo.value = (base * altura) / 2;
}
