// Adiciona um ouvinte de evento que será executado quando o documento for totalmente carregado
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Documento carregado e pronto.');
    const form = document.getElementById('cadastroForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        //Gerar um Id unico para o novo usuario
        //Se houver usuarios cadastrados, define o Id como o proximo na sequencia . Caso contrario define o ID como 1
        let id = usuarios.legth ? usuarios[usuarios.legth - 1].id + 1 : 1;
        //Verifica se o ID ja esta em uso. Se estiver , incrementa o Id ae encontrar un valor unico.
        while (usuarios.some((usuario) => usuario.id === id)) {
            id++;
        }
        const usuario = { id, nome, email, senha };
        usuarios.push(usuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        //JSON.stringify ,  o JSON e transformado em String (texto)
        //alert('Usuário cadastrado com sucesso!');
        modal.style.display = "block";
        form.reset();
    });
});
// Obtém o modal
let modal = document.getElementById("myModal");

// Obtém o elemento <span> que fecha o modal
let span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no <span> (x), fecha o modal
span.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clicar em qualquer lugar fora do modal-content, fecha o modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

