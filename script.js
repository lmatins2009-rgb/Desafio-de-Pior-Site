function irCadastro() {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem");

    if (!nome || !email) {
        mensagem.textContent = "Erro 404: seus dados foram encontrados, mas estão ausentes.";
        return;
    }

    // Pegadinha: o botão Cancelar parece importante, mas não avança.
    window.location.href = "cadastro.html";
}

function cancelar() {
    const mensagem = document.getElementById("mensagem");

    mensagem.textContent = "Tudo certo! Seu cancelamento foi cancelado.";

    // Não apaga os dados para manter o fluxo vencível.
}

function validarCadastro() {
    const senha = document.getElementById("senha").value;
    const confirmar = document.getElementById("confirmar").value;
    const termos = document.getElementById("termos").checked;
    const mensagem = document.getElementById("mensagem2");

    /*
      A regra exibida é propositalmente contraditória.
      Para permitir a conclusão, usamos uma senha de 8 caracteres
      contendo pelo menos uma letra e um número.
    */

    if (!termos) {
        mensagem.textContent = "Sucesso: você não aceitou os termos. Tente aceitar para continuar.";
        return;
    }

    if (senha.length !== 8) {
        mensagem.textContent = "Erro: a senha precisa ter exatamente 8 caracteres. Nem 7, nem 9. Boa sorte.";
        return;
    }

    if (senha !== confirmar) {
        mensagem.textContent = "As senhas são diferentes. Ou talvez sejam. Verifique novamente.";
        return;
    }

    if (!/[A-Za-z]/.test(senha) || !/[0-9]/.test(senha)) {
        mensagem.textContent = "A senha precisa de pelo menos uma letra e um número.";
        return;
    }

    window.location.href = "final.html";
}
