function autentica()
{
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
    if (usuario == "admin" && senha == "web123")
    {
        window.location.href = "inicial/pagina_inicial.html";
    }
    else
    {
        alert("Usuário ou senha incorretos!")
    }
}