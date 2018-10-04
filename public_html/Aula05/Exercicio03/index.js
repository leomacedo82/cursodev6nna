var produtos = document.getElementById("produto").options;
var preco = document.getElementById("label-preco");
var quantidade = document.getElementById("quantidade");
var subtotal = document.getElementById("sub-total");
var tabela = document.getElementById("tabela");
var valorProduto = 0;

function seleciona() 
{
    var produtoIndex = document.getElementById("produto").selectedIndex;
    var valores = [10.00,20.00,5.00,35.00,3.00];
    valorProduto = valores[produtoIndex];

    if(quantidade.value != "" && quantidade.value != null)
    {
        subtotal.innerHTML = parseFloat(parseFloat(quantidade.value) * valorProduto).toFixed(2);
        preco.innerHTML = valorProduto.toFixed(2);
    }
    else
    {
        subtotal.innerHTML = (0).toFixed(2);
        preco.innerHTML = (0).toFixed(2);
    }
}

var soma = 0;

function addProduto()
{
    index = document.getElementById("produto").selectedIndex;
    var descricao = produtos[index].value;
    var qtde = quantidade.value;
    var precoValor = preco.innerText;
    var subtotalValor = subtotal.innerText;
    var total = document.getElementById("total");

    if(quantidade.value != "" && quantidade.value != null)
    {
        tabela.insertBefore(createNode(descricao,qtde,precoValor,subtotalValor),tabela.lastElementChild);
        soma = soma + parseFloat(subtotalValor);
        total.innerHTML = "R$ " + soma.toFixed(2);
    }
    else
    {
        alert("Quantidade não pode ser vazio!");
    }
}

function limparComanda()
{
    var cont = tabela.childElementCount;
    for (var i = cont - 2; i >= 1; i--)
    {
        tabela.removeChild(tabela.children[i]);
    }
    subtotal.innerHTML = (0).toFixed(2);
    preco.innerHTML = (0).toFixed(2);
    total.innerHTML = "R$ 0.00"
    quantidade.value = 0;
    soma = 0;
}

function createNode(descricao,qtde,preco,subtotal)
{
    var node = document.createElement("tr");
    var subNode1 = document.createElement("td");
    var subNode2 = document.createElement("td");
    var subNode3 = document.createElement("td");
    var subNode4 = document.createElement("td");
    var conteudoSubNode1 = document.createTextNode(descricao);
    var conteudoSubNode2 = document.createTextNode(qtde);
    var conteudoSubNode3 = document.createTextNode(preco);
    var conteudoSubNode4 = document.createTextNode("R$ "+subtotal);
    subNode1.appendChild(conteudoSubNode1);
    subNode2.appendChild(conteudoSubNode2);
    subNode3.appendChild(conteudoSubNode3);
    subNode4.appendChild(conteudoSubNode4);
    node.appendChild(subNode1);
    node.appendChild(subNode2);
    node.appendChild(subNode3);
    node.appendChild(subNode4);
    return node;
}