// script.js

// Referências dos elementos do DOM
const formCadastro = document.getElementById("form-cadastro");
const listaCadastros = document.getElementById("lista-cadastros");
const nomeInput = document.getElementById("nome");
const servicoInput = document.getElementById("servico");
const dataInput = document.getElementById("data");

let cadastros = [];  // Array para armazenar os dados

// Função para salvar os dados
function salvarCadastro(event) {
    event.preventDefault();  // Evita o envio do formulário

    const novoCadastro = {
        nome: nomeInput.value,
        servico: servicoInput.value,
        data: dataInput.value
    };

    cadastros.push(novoCadastro);  // Adiciona o novo cadastro ao array
    exibirCadastros();  // Atualiza a lista de cadastros
    formCadastro.reset();  // Limpa os campos do formulário
}

// Função para exibir os cadastros
function exibirCadastros() {
    listaCadastros.innerHTML = "";  // Limpa a lista atual

    cadastros.forEach((cadastro, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span><strong>${cadastro.nome}</strong> - ${cadastro.servico} - ${cadastro.data}</span>
            <button class="editar-btn" onclick="editarCadastro(${index})">Editar</button>
            <button onclick="deletarCadastro(${index})">Deletar</button>
        `;
        listaCadastros.appendChild(li);
    });
}

// Função para editar o cadastro
function editarCadastro(index) {
    const cadastro = cadastros[index];

    nomeInput.value = cadastro.nome;
    servicoInput.value = cadastro.servico;
    dataInput.value = cadastro.data;

    // Remove o cadastro antigo e atualiza o índice do cadastro editado
    cadastros.splice(index, 1);
    exibirCadastros();  // Atualiza a lista de cadastros
}

// Função para deletar o cadastro
function deletarCadastro(index) {
    cadastros.splice(index, 1);  // Remove o cadastro do array
    exibirCadastros();  // Atualiza a lista de cadastros
}

// Evento de envio do formulário
formCadastro.addEventListener("submit", salvarCadastro);
