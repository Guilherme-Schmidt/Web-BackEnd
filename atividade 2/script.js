document.addEventListener("DOMContentLoaded", () => {
    
    const tarefaInput = document.getElementById("tarefa");
    const addTarefaButton = document.getElementById("addTarefa");
    const listaTarefa = document.getElementById("listaTarefa");

    addTarefaButton.addEventListener("click", () => {
        const texto = tarefaInput.value.trim();
        if (texto !== "") {
            adicionarTarefa(texto);
            tarefaInput.value = "";
            tarefaInput.focus();
        }
    });

    listaTarefa.addEventListener("click", (event) => {
        if (event.target.classList.contains("concluirBotao")) {
            event.target.parentElement.classList.toggle("realizada");
        } else if (event.target.classList.contains("removerBotao")) {
            event.target.parentElement.remove();
        }
    });

    function adicionarTarefa(texto) {
        const li = document.createElement("li");
        li.textContent = texto;

        const concluirBotao = document.createElement("button");
        concluirBotao.textContent = "Concluir";
        concluirBotao.classList.add("concluirBotao");
        li.appendChild(concluirBotao);

        const removerBotao = document.createElement("button");
        removerBotao.textContent = "Remover";
        removerBotao.classList.add("removerBotao");
        li.appendChild(removerBotao);

        listaTarefa.appendChild(li);
    }
});
