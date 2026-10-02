const prompt = require("prompt-sync")();

let time = [];
let continuar = true;

function mostrarMenu() {
    console.log('\n==============================');
    console.log('----- SISTEMA DE GAMERS -----');
    console.log('1 - Cadastrar');
    console.log('2 - Deletar');
    console.log('3 - Mostrar Equipe');
    console.log('4 - Calcular Média da Equipe');
    console.log('5 - Buscar Jogador');
    console.log('6 - Sair');
    console.log('==============================');
}


// CADASTRAR JOGADOR
function cadastrarJogador() {

    let nomeJogador = prompt("Digite o nome do jogador: ");
    let funcaoJogador = prompt("Digite a função no time: ");
    let pontuacaoJogador = Number(prompt("Digite a pontuação: "));

    if (isNaN(pontuacaoJogador)) {
        console.log("Pontuação inválida.");
        return;
    }

    let recruta = {
        nome: nomeJogador,
        funcao: funcaoJogador,
        pontuacao: pontuacaoJogador
    };

    time.push(recruta);

    console.log("Jogador " + nomeJogador + " cadastrado com sucesso!");
}


// DELETAR JOGADOR
function deletarJogador() {

    if (time.length === 0) {
        console.log("Nenhum jogador cadastrado.");
        return;
    }

    let nomeDeletado = prompt("Digite o nome do jogador que deseja deletar: ");

    let indexDeletado = -1;

    for (let i = 0; i < time.length; i++) {

        if (time[i].nome === nomeDeletado) {
            indexDeletado = i;
            break;
        }
    }

    if (indexDeletado === -1) {
        console.log("Jogador não encontrado.");
        return;
    }

    time.splice(indexDeletado, 1);

    console.log("Jogador deletado com sucesso!");
}


// MOSTRAR EQUIPE
function mostrarEquipe() {

    if (time.length === 0) {
        console.log("Nenhum jogador cadastrado.");
        return;
    }

    console.log("\n----- EQUIPE -----");

    for (let i = 0; i < time.length; i++) {

        let jogador = time[i];

        console.log(
            (i + 1) + ". " +
            jogador.nome +
            " | Função: " + jogador.funcao +
            " | Pontuação: " + jogador.pontuacao
        );
    }
}


// CALCULAR MÉDIA
function calculoDaMedia() {

    if (time.length === 0) {
        console.log("Nenhum jogador cadastrado.");
        return;
    }

    let totalPontos = 0;

    for (let i = 0; i < time.length; i++) {
        totalPontos = totalPontos + time[i].pontuacao;
    }

    let mediaPontos = totalPontos / time.length;

    console.log("Pontuação média da equipe: " + mediaPontos);
}


// BUSCAR JOGADOR
function buscarJogador() {

    if (time.length === 0) {
        console.log("Nenhum jogador cadastrado.");
        return;
    }

    let nomeDesejado = prompt("Digite o nome do jogador que deseja buscar: ");

    let encontrou = false;

    // Busca Linear
    for (let i = 0; i < time.length; i++) {

        let jogadorAtual = time[i];

        if (jogadorAtual.nome === nomeDesejado) {

            console.log("\nJOGADOR ENCONTRADO!");
            console.log("Nome: " + jogadorAtual.nome);
            console.log("Função: " + jogadorAtual.funcao);
            console.log("Pontuação: " + jogadorAtual.pontuacao);

            encontrou = true;

            break;
        }
    }

    if (encontrou === false) {
        console.log(
            "O jogador " + nomeDesejado +
            " não faz parte da equipe."
        );
    }
}


// PROGRAMA PRINCIPAL
while (continuar === true) {

    mostrarMenu();

    let opcao = prompt("Digite sua opção: ");

    if (opcao === "1") {

        cadastrarJogador();

    } else if (opcao === "2") {

        deletarJogador();

    } else if (opcao === "3") {

        mostrarEquipe();

    } else if (opcao === "4") {

        calculoDaMedia();

    } else if (opcao === "5") {

        buscarJogador();

    } else if (opcao === "6") {

        continuar = false;
        console.log("Sistema encerrado.");

    } else {

        console.log("Opção inválida. Digite novamente.");
    }
}