// criar uma matriz de jogos
const jogos = [
    ['Palmeiras', 'Fotaleza', 4, 2],
    ['Fortaleza', 'Paisandu', 2, 2],
    ['Fortaleza', 'Brasil', 2, 3],
    ['Argentina', 'Fortaleza', 7, 1]
];

//criar um objeto simulando o registro de entrada de cada apostador Será um array e ele será percorrido nome - golstime1 - golstime2
let apostas = [
    ['Madruguinha', 4, 2],
    ['Francisquin', 2, 1],
    ['Jumentina', 0, 1],
    ['Doidonato', 7, 9],
];

//caso qeeira inserir uma nova aposta no array de apostas(simulando uma nova entrada )
let novaAposta = ['Allan', 2, 2];
apostas.push(novaAposta)

// uma função vai percorrer o array de apostadores e suas apostas
function sistema() {

    //sortear qual jogo será realizado para simular um campeonato normal qualquer
    var partida = Math.floor(Math.random() * jogos.length);

    let time1 = jogos[partida][0]
    let time2 = jogos[partida][1]
    let golsTime1 = jogos[partida][2]
    let golsTime2 = jogos[partida][3]

    /*futuramente poderia ser um array de ganhadores pois ainda a chance de mais de uma pessoa acertar, e ele servira para informar 
    quantos e quais ganharam, ou se ninguem ganhour */
    ganhadores = 0;

    for (let i = 0; i < apostas.length; i++) {
        /* forma de identificar cada valor do array de apostas
        // console.log(`${apostas[i][0]}`) //jogador
        // console.log(`${apostas[i][1]}`) //gols time 1
        // console.log(`${apostas[i][2]}`) //gols time 2 */

        if ((golsTime1 == apostas[i][1]) && (golsTime2 == apostas[i][2])) {
            console.log(`Apostador: ${apostas[i][0]} ganhou as apostas do jogo! chutou ${apostas[i][1]} a ${apostas[i][2]}`)
            console.log(`Jogo entre: ${time1} x ${time2} deu ${golsTime1} a ${golsTime2}`)
            ganhadores = 1;
            return;
        }

    }
    /*aqui caso ninguem ganhe e para não ficar sem um retorno informativo do sistema, 
    ele responde que ninguem ganhou baseado no contador de pessoas que ganhou la trás.
    Lembrando que é possivel alimentar o array para mostrar de naquele jogo mais de uma pessoa ganhou ou não.
    */
    if (!ganhadores) {
        console.log('Nenhum ganhador nesta aposta!')
    }
}

sistema()