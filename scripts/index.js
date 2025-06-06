contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    // Coleta os dados do formulário
    const formData = new FormData(contactForm);

    // Enviar os dados para o serviço de e-mail 
    fetch(contactForm.action, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            // Exibir uma mensagem de sucesso ao usuário
            alert('Mensagem enviada com sucesso!');
            // Limpar o formulário
            contactForm.reset();
        } else {
            // Exibir uma mensagem de erro ao usuário
            alert('Ocorreu um erro ao enviar a mensagem. Por favor tente novamente.');
        }
    })
    .catch(error => {
        console.error('Erro:', error); // Logar o erro no console para depuração
        alert('Ocorreu um erro ao enviar a mensagem. Por favor tente novamente.');
    });
});
