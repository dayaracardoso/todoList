function addCard(elemento) {
    const ulId = elemento.previousElementSibling.id; // id do ul (irmão da div)
    const text = prompt("Qual é a tarefa?"); //prompt para captar o nome da tarefa
    const board = document.getElementById(ulId); // define board como o id da ul

    // o template recebe um id dinâmico pelo new Date, previnindo ids iguais no programa
    const template = `
    <li id="${new Date().getTime()}" draggable="true" ondragstart="drag(event);">
        <p>${text}</p>
        <p class="remove" onclick="removeCard(this);">x</p>
    </li>`;

    board.innerHTML = board.innerHTML + template; // board recebe o html dela + o template. Adiciona uma li a cada nova tarefa
}

function removeCard(elemento) { // remove o li pelo id dele (pai da tag p em questão)
    document.getElementById(elemento.parentElement.id).remove();
}

// função em cada li para arrastar. Função parecida com a localStorage, recebe 2 parâmetros
function drag(event) {
    event.dataTransfer.setData("card", event.target.id)
}

function over(event) {event.preventDefault();} //previne comportamentos inesperados do navegador

// função para soltar o card, recebe dois parâmetros
function drop(event, id) {
    event.preventDefault(); //previne comportamentos inesperados do navegador
    const target = document.getElementById(id); //define target como o id do elemento
    const data = event.dataTransfer.getData("card"); // guarda os dados do card quando soltar
    const card = document.getElementById(data);
    target.appendChild(card); // adicionar ao card
    event.dataTransfer.clearData(); // para garantir que não ficou nada na memória ao soltar
}