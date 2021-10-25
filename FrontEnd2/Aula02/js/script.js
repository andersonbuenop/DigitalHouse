let user = parseInt(prompt("Pedra (1), Papel(2) ou Tesoura(3)?"));

let machine = parseInt(Math.random()*3 +1);

switch(user){
    case 1:
        if(machine == 1){
            alert("Você escolheu Pedra e a maquina escolheu Pedra, então deu empate!");
        }else if(machine == 2){
            alert("Você escolheu Pedra e a maquina escolheu Papel, então perda!");
        }else if(machine == 3){
            alert("Você escolheu Pedra e a maquina escolheu Tesoura, então deu vitoria!");
        }
    break;
    case 2:
        if(machine == 1){
            alert("Você escolheu Papel e a maquina escolheu Pedra, então deu vitoria!");
        }else if(machine == 2){
            alert("Você escolheu Papel e a maquina escolheu Papel, então deu empate!");
        }else if(machine == 3){
            alert("Você escolheu Papel e a maquina escolheu Tesoura, então deu perda!");
        }
    break;
    case 3:
        if(machine == 1){
            alert("Você escolheu Tesoura e a maquina escolheu Pedra, então deu vitoria!");
        }else if(machine == 2){
            alert("Você escolheu Tesoura e a maquina escolheu Papel, então deu perda!");
        }else if(machine == 3){
            alert("Você escolheu Tesoura e a maquina escolheu Tesoura, então deu empate!");
        }
    break;
    default: alert("Entre com uma opção valida!");
};