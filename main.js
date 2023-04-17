function gerarTabuada() {
    let numero = parseInt(document.querySelector("#numero").value);
    let tabela = document.querySelector("#tabela-tabuada");

    tabela.innerHTML = "";

    for (let i = 1; i <=10; i++) {
        let resultado = numero * i;
        let linha = "<tr><td>" + numero + " X " + i + " =" + "</td><td>" + resultado + "</td></tr>";

        tabela.innerHTML += linha;
    }

}

const toggleBtn = document.querySelector('#toggle-mode');
const body = document.body;
//const header = document.querySelector('#head')

toggleBtn.addEventListener("click", function() {
    body.classList.toggle("light-mode");
    //header.classList.toggle("dark-mode-header")
})