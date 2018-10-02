var tagResultado = document.getElementById("resultado");
function soma()
{
    var valor1 = parseFloat(document.getElementById("1").value);
    var valor2 = parseFloat(document.getElementById("2").value);
    var resultado = valor1 + valor2;
    tagResultado.innerText = resultado.toString();
}

function addProduto()
{
    var node = document.getElementById("listaOrigem").lastChild;
    var list = document.getElementById("listaDestino");
    list.insertBefore(node, list.lastChild);
}