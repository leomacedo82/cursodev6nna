function addProduto()
{
    var node = document.getElementById("listaOrigem").lastChild;
    var list = document.getElementById("listaDestino");
    list.insertBefore(node, list.lastChild);
}