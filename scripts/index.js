
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário
    window.alert("Formulário enviado com sucesso!"); 
    this.reset(); // reseta o formulário
});
