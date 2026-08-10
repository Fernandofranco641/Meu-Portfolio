function abrirMenu(event, nome) {

    // Impede que o clique abra o link
    event.preventDefault();

    // Impede que o clique continue para o elemento pai
    event.stopPropagation();

    alert("Link: " + nome);
}
