/*  
Mesa 05 - Checkpoint
Anderson Bueno, 
Alfredo Gutemberg, 
Vinícius Alexandre, 
Mauricio Gregory, 
Wagner Sena 
*/
microondas('', 0); //Inserir nome do prato pré-defnido e inserir tempo manual se desejar.
/* pipoca, carne, macarrao, feijao, brigadeiro

1 - A menssagem de "tempo insuficiente!" Cabe apenas em caso do
usuario entrar com numero negativo ou abrir a porta do microondas antes do tempo padrão acabar

2 - Qualquer valor inserido no campo "alimento" que não sejam os pré-definidos, resultará em
"prato inexistente".
 */

function microondas(alimento, adcional) {
  let time
    switch (alimento) {
        case 'pipoca':
            time = 10;
            break;
        case 'macarrao':
            time = 8;
            break;
        case 'carne':
            time = 15;
            break;
        case 'feijao':
            time = 12;
            break;
        case 'brigadeiro':
            time = 8;
            break;
        default:
            time = 0;
    }

    adcional = time + adcional;

    if ((alimento === '') || ((alimento !== 'carne') && (alimento !== 'pipoca') && (alimento !== 'feijao')  && (alimento !== 'macarrao') && (alimento !== 'brigadeiro'))){
    // || (alimento !== 'pipoca') || (alimento !== 'carne') || (alimento !== 'macarrao ') || (alimento !== 'feijao') || (alimento !== 'brigadeiro ')) {
        return console.log("Prato inexistente!")
    } else if (adcional < time) {
        return console.log("Tempo insuficiente!");
        //console.log("Para o alimento, " + escolha + ", o tempo é de " + adcional + " segundos!");
    } else if (adcional > time * 2 && adcional <= time * 3) {
        console.log("A comida queimou!");
        //console.log("Para o alimento, " + escolha + ", o tempo é de " + adcional + " segundos!");
    } else if (adcional > time * 3) {
        return console.log("Kabumm!");
        //console.log("Para o alimento, " + escolha + ", o tempo é de " + adcional + " segundos!");
    } else {
        //console.log("Para o alimento, " + escolha + ", o tempo é de " + adcional + " segundos!");
        return console.log("Prato pronto, bom apetite!!!");
    }
}